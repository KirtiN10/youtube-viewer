import { combineReducers } from "redux";

import videoReducer from "./videos/reducer";
import commentsReducer from "./comments/reducer";

//combine all the reducers
const rootReducer = combineReducers({
  videos: videoReducer,
  comments: commentsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;



