import { IChatAlert, IChatState, IMessage } from "@type/chat";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IChatState = {
  isChat: false,
  isAlert: false,
  alertMsg: "",
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat(state) {
      state.isChat = true;
      state.messages = [];
    },

    closeChat(state) {
      state.isChat = false;
      state.messages = [];
    },

    toggleChat(state) {
      state.isChat = !state.isChat;
      state.messages = [];
    },
    sendQuestion(state, action: PayloadAction<IMessage>) {
      state.messages.push(action.payload);
    },
    getAnswer(state, action: PayloadAction<IMessage>) {
      state.messages.push(action.payload);
    },
    getAlert(state, action: PayloadAction<IChatAlert>) {
      state.isAlert = true;
      state.alertMsg = action.payload.alertMsg;
    },
    hideAlert(state) {
      state.isAlert = false;
      state.alertMsg = "";
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
