import React, { useState, useEffect } from "react";
import "./Feed.css";
import {
  Create as CreateIcon,
  Image as ImageIcon,
  Subscriptions as SubscriptionsIcon,
  EventNote as EventNoteIcon,
  CalendarViewDay as CalendarViewDayIcon,
} from "@mui/icons-material/";
import InputOption from "./InputOption";
import Post from "./Post";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
   useEffect(() => asyncGetPosts(), []);
  const sendPost = (e) => {
    e.preventDefault();
    asyncAddPost();
    setInput("");
    asyncGetPosts();
   

  };
  async function asyncGetPosts() {
    try {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const mappedData = querySnapshot?.docs?.map((doc) => ({
        id: doc?.id||"",
        data: doc?.data()||"",
      }));
      console.log("Retrieved: %d posts", mappedData?.length);
      setPosts(mappedData?.length ? mappedData:[]);
    } catch (e) {
      alert("Error fetching documents: ", e);
    }
  }
  async function asyncAddPost() {
    try {
      console.log(user);
      const docRef = await addDoc(collection(db, "posts"), {
        name: user.displayName,
        email: user.email,
        message: input,
        photoURL: user.photoURL || "",
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      alert("Error adding document: ", e);
    }
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit"></button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts?.map(({ id, data }) => (
          <Post
            key={id}
            name={data.name}
            email={data.email}
            message={data.message}
            photoURL={data.photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
