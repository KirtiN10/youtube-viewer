import { AnyAction } from "redux";
import {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAILURE,
} from "./actionTypes";

interface InitialState {
  pending: boolean;
  videos: [];
  error: null | boolean | undefined;
}

const initialState: InitialState = {
  pending: false,
  videos: [],
  error: null,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_VIDEO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        pending: false,
        videos: action.payload.videos.items,
        error: null,
      };
    case FETCH_VIDEO_FAILURE:
      return {
        ...state,
        pending: false,
        videos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
