import { addYears } from "date-fns";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/reducers/rootReducer";
import { calcAge } from "~/src/lib/age";
import { createDate } from "~/src/lib/date";

const PERSONA_AGE = 25;
const personaBirth = addYears(createDate(), -PERSONA_AGE).toISOString();

type UpdatePayload = {
  birthday: string;
};
const initialState = {
  birthday: personaBirth,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    updateBirthday(state, action: PayloadAction<UpdatePayload>) {
      const { birthday } = action.payload;
      state.birthday = birthday;
    },
  },
});

export const { updateBirthday: updateBirthdayAction, reset: resetAction } =
  userSlice.actions;

export default userSlice.reducer;

const selectUser = (state: RootState) => state.features.user;

export const selectUserWithAge = createSelector(selectUser, (user) => {
  const age = calcAge(user.birthday);
  return { ...user, age };
});
