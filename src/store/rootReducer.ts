import { combineReducers } from "redux";

import videoReducer from "./video/reducer";

const rootReducer = combineReducers({
  videos: videoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;