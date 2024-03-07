import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <CommentItem data={comment} />
      <div className="pl-5 ml-5 border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
export default CommentList;
