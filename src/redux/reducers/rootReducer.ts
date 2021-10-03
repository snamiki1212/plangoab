import { combineReducers } from "@reduxjs/toolkit";
import { reducerV1 } from "~/src/redux/reducers/reducerV1";
import { reducerV2 } from "~/src/redux/reducers/reducerV2";
import { calendarApi } from "~/src/redux/v2/services/calendarApi";

const rootReducer = combineReducers({
  ...reducerV1,
  [calendarApi.reducerPath]: calendarApi.reducer, // TODO: this line should move to V2 reducer
  v2: reducerV2,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
