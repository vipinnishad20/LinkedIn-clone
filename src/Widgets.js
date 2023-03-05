import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin news</h2>
        <InfoIcon />
      </div>

      {newArticle("18 Awesome Linux Themes For Your Inspiration", "Linux - 169 readers")}
      {newArticle("10 Best Websites for Practising and Perfecting Front-End Development", "Webdev - 160 readers")}
      {newArticle("What is Chrome Scripting API", "Code - 3 readers")}
      {newArticle("Revamped feed filtering options", "Other - 1 readers")}
    </div>
  );
}

export default Widgets;
