import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcAge } from "../../lib/age";
import { addYears } from "date-fns";

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
  },
  reducers: {
    updateBirthday(state, action: PayloadAction<UpdatePayload>) {
      const { birthday } = action.payload;
      state.birthday = birthday;
      state.age = calcAge(birthday);
    },
  },
});

export const { updateBirthday } = userSlice.actions;

export default userSlice.reducer;
