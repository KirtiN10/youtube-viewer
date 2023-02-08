
import {
    FETCH_VIDEO_REQUEST,
    FETCH_VIDEO_SUCCESS,
    FETCH_VIDEO_FAILURE,
  } from "./actionTypes";
  
  import { VideoActions, VideoState } from "./types";
  
  const initialState: any = {
    pending: false,
    videos: [],
    error: null,
  };
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_VIDEO_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_VIDEO_SUCCESS:
        console.log('action.payload.videosaction.payload.videos', action.payload.videos.items)
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