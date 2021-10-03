import { combineReducers } from "@reduxjs/toolkit";

// V2
import stepReducer from "~/src/redux/v2/stores/ui/step";
import navigationReducer from "~/src/redux/v2/stores/ui/navigation";
import saveModalReducer from "~/src/redux/v2/stores/ui/saveModal";
import selectedTabReducer from "~/src/redux/v2/stores/features/selectedTab";

const uiReducer = combineReducers({
  step: stepReducer,
  saveModal: saveModalReducer,
  navigation: navigationReducer,
});

const featuresReducer = combineReducers({
  selectedTab: selectedTabReducer,
});

export const reducerV2 = combineReducers({
  features: featuresReducer,
  ui: uiReducer,
});
