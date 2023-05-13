import { IButtonState } from "@type/button";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IButtonState = {
  beforeUpdate: false,
  beforeDelete: false,
  updatePwd: "",
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setBeforeUpdate: (state, action: PayloadAction<boolean>) => {
      state.beforeUpdate = action.payload;
    },
    setBeforDelete: (state, action: PayloadAction<boolean>) => {
      state.beforeDelete = action.payload;
    },
    updatePwdCheck: (state, action: PayloadAction<string>) => {
      state.updatePwd = action.payload;
    },
  },
});

export const buttonActions = buttonSlice.actions;
export default buttonSlice.reducer;
