import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const appBody = () => (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return <div className="app">{!user ? <Login /> : appBody()}</div>;
}

export default App;
