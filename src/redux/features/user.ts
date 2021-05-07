import { addYears } from "date-fns";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootReducer";
import { calcAge } from "@/lib/age";

const PERSONA_AGE = 25;
const personaBirth = addYears(new Date(), -PERSONA_AGE).toISOString();

type UpdatePayload = {
  birthday: string;
};
const initialState = {
  birthday: personaBirth,
  age: PERSONA_AGE, // TODO: should not save here. only select.
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    updateBirthday(state, action: PayloadAction<UpdatePayload>) {
      const { birthday } = action.payload;
      state.birthday = birthday;
      state.age = calcAge(birthday);
    },
  },
});

export const {
  updateBirthday: updateBirthdayAction,
  reset: resetAction,
} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.features.user;
