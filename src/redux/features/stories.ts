import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addYears, addMonths } from "date-fns";
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "../../core/story/CommunityCollegeAfterwardsWorkingHolidayStory";
import { AGE_OF_START_STORY } from "../../constants/fullcalendar/options";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../constants/visa";
import { COMMUNITY_COLLEGE_EXAMPLE1 } from "../../constants/school";
import { range } from "../../lib/util";

const startMonths = COMMUNITY_COLLEGE_EXAMPLE1.startMonths;

const addingNumbers = range(
  AGE_OF_START_STORY,
  WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
);

type GeneratePayload = {
  birth: string;
};
const storiesSlice = createSlice({
  name: "stories",
  initialState: {
    stories: [] as CommunityCollegeAfterwardsWorkingHolidayStory[],
  },
  reducers: {
    generate(state, action: PayloadAction<GeneratePayload>) {
      const { birth: _birth } = action.payload;

      // TODO: goto outside. don't create object here.
      const birth = new Date(_birth);

      const startDates = addingNumbers
        .map((num) => addYears(birth, num))
        .flatMap((startDate) => {
          const datesInYear = startMonths.map((month) =>
            addMonths(startDate, month)
          );
          return datesInYear;
        });

      const _stories = startDates.map(
        (startDate) =>
          new CommunityCollegeAfterwardsWorkingHolidayStory(startDate)
      );

      state.stories = _stories;
    },
  },
});

export const { generate } = storiesSlice.actions;

export default storiesSlice.reducer;
