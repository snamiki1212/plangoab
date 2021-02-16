import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcAge } from "../../lib/age";
import { addYears } from "date-fns";
import { RootState } from "../rootReducer";

const PERSONA_AGE = 25;
const personaBirth = addYears(new Date(), -PERSONA_AGE).toISOString();

type UpdatePayload = {
  birthday: string;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    birthday: personaBirth,
    age: PERSONA_AGE,
    canWorkingholiday: true,
  },
  reducers: {
    updateBirthday(state, action: PayloadAction<UpdatePayload>) {
      const { birthday } = action.payload;
      state.birthday = birthday;
      state.age = calcAge(birthday);
    },
    toggleWorkingholiday(state, _action: PayloadAction<undefined>) {
      state.canWorkingholiday = !state.canWorkingholiday;
    },
  },
});

export const {
  updateBirthday: updateBirthdayAction,
  toggleWorkingholiday: toggleWorkingholidayAction,
} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.features.user;
