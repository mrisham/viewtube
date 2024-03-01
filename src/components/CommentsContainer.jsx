import React from "react";
const CommentsData = [
  {
    name: "Mridul",
    text: "Nice vedio bro!",
    replies: [],
  },
  {
    name: "Mridul",
    text: "Nice vedio bro!",
    replies: [],
  },
  {
    name: "Mridul",
    text: "Nice vedio bro!",
    replies: [],
  },
  {
    name: "Mridul",
    text: "Nice vedio bro!",
    replies: [],
  },
  {
    name: "Mridul",
    text: "Nice vedio bro!",
    replies: [],
  },
];
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <Comment key={index} data={comment} />
  ));
};
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-50 my-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className="w-12 h-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className=" text-2xl font-bold">Comments:</h1>
      <CommentList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
