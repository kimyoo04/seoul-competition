import { ICommentState } from "@type/comment";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ICommentState = {
  beforeUpdate: false,
  beforeDelete: false,
  updatePwd: "",
  commentId: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // 수정 버튼 클릭했을 때
    clickUpdate: (state, action: PayloadAction<number>) => {
      state.beforeUpdate = true
      state.commentId = action.payload
    },
    // 삭제 버튼 클릭했을 때
    clickDelete: (state, action: PayloadAction<number>) => {
      state.beforeDelete = true
      state.commentId = action.payload
    },

    // 취소 버튼을 클릭했을 때
    clickCancel: (state) => {
      state.beforeDelete = false
      state.beforeUpdate = false
    },

    // 패스워드를 입력 성공했을 때
    updatePwdCheck: (state, action: PayloadAction<string>) => {
      state.updatePwd = action.payload;
    },

    // 수정이나 삭제를 완료했을 때
    resetComment: (state) => {
      state.beforeUpdate = false;
      state.beforeDelete = false;
      state.updatePwd = "";
      state.commentId = null;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
