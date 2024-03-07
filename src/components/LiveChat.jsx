import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="  h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage name={chat.name} key={index} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-[350px] p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mridul",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96 px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-black text-white">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
