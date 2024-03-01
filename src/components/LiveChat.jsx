import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Poling");
      dispatch(
        addMessage({
          name: "Mridul",
          message: "Yo man",
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full  h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chat) => (
        <ChatMessage name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
