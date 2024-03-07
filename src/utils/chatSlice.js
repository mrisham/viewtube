import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVECHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
