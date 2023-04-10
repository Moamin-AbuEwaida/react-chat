import React from "react";
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatPage = (props) => {
  const chatProps = useMultiChatLogic(
    "53a94c12-b840-48d1-a3f9-bf22daf4e195",
    props.username,
    props.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatPage;
