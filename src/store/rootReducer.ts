import { combineReducers } from "redux";

import videoReducer from "./videos/reducer";

const rootReducer = combineReducers({
  videos: videoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;