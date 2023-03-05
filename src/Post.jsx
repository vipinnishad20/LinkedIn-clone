import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import {
  ThumbUpOutlined as ThumbUpOutlinedIcon,
  ChatOutlined as ChatOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
  SendOutlined as SendOutlinedIcon,
} from "@mui/icons-material";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, email, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoURL}>{email[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
