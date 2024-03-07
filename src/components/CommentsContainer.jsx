import React from "react";
import CommentList from "./CommentList";
const commentsData = [
  {
    name: "Mridul Shukla",
    text: "This is a fascinating topic! I'm excited to learn more about it.",
    replies: [],
  },
  {
    name: "Mridul Shukla",
    text: "I completely agree with your point. It's crucial to consider all perspectives.",
    replies: [
      {
        name: "Mridul Shukla",
        text: "Wow, I never thought about it that way before. Thanks for sharing!",
        replies: [
          {
            name: "Mridul Shukla",
            text: "I'm impressed by your insights. Let's continue this discussion further.",
            replies: [
              {
                name: "Mridul Shukla",
                text: "That's a valid concern. We should definitely address it in our approach.",
                replies: [
                  {
                    name: "Mridul Shukla",
                    text: "I appreciate your input. It's helping me refine my understanding.",
                    replies: [
                      {
                        name: "Mridul Shukla",
                        text: "Let's explore this idea deeper. I think it has a lot of potential.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mridul Shukla",
    text: "The data you provided is really insightful. It adds a new dimension to our analysis.",
    replies: [
      {
        name: "Mridul Shukla",
        text: "I'm glad you brought up that point. It's essential for our project.",
        replies: [],
      },
    ],
  },
  {
    name: "Mridul Shukla",
    text: "This is a great initiative! Count me in for support.",
    replies: [
      {
        name: "Mridul Shukla",
        text: "I agree, teamwork is key to success. Let's collaborate effectively.",
        replies: [],
      },
    ],
  },
  {
    name: "Mridul Shukla",
    text: "I'm excited to see the progress we make together. Let's keep pushing forward!",
    replies: [
      {
        name: "Mridul Shukla",
        text: "Your dedication to the project is inspiring. Let's achieve our goals together.",
        replies: [],
      },
    ],
  },
  {
    name: "Mridul Shukla",
    text: "This discussion has been very enlightening. Thank you all for your valuable contributions.",
    replies: [
      {
        name: "Mridul Shukla",
        text: "I'm impressed by the diversity of ideas presented here. Let's build on them.",
        replies: [],
      },
    ],
  },
  {
    name: "Mridul Shukla",
    text: "Let's brainstorm some innovative solutions to this problem. I'm eager to hear your thoughts.",
    replies: [
      {
        name: "Mridul Shukla",
        text: "I agree, thinking outside the box is key. Let's challenge ourselves.",
        replies: [
          {
            name: "Mridul Shukla",
            text: "That's a brilliant suggestion! Let's explore it further.",
            replies: [
              {
                name: "Mridul Shukla",
                text: "I'm excited to see how this idea evolves. Let's work on it together.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className=" text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
