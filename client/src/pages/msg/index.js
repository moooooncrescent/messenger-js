import React from "react";
import Messages from "./messages/index";
import Conversations from "./conversations/index";
import "./index.css";


function Msg() {
  return (
    <div className="msg">
        <div className="conversations">
          <Conversations />
      </div>
       <div className="messages">
          <Messages />
        </div>
    </div>
  );
}
export default Msg;