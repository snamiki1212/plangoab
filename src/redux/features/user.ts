import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UpdatePayload = {
  birthday: string;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    birthday: "2021-01-01",
  },
  reducers: {
    updateXXX(state, action: PayloadAction<UpdatePayload>) {
      const { birthday } = action.payload;
      state.birthday = birthday;
      // TODO: age
    },
  },
});

export const { updateXXX } = userSlice.actions;

export default userSlice.reducer;
