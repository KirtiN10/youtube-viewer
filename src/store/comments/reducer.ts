
import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
  } from "./actionTypes";
  
  import { CommentsActions, CommentsState } from "./types";
  
  const initialState: any = {
    pending: false,
    comments: [],
    error: null,
  };
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_COMMENTS_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_COMMENTS_SUCCESS:
        console.log('commentsReducer', action.payload.comments.items )
        return {
          ...state,
          pending: false,
          comments: action.payload.comments.items,
          error: null,
        };
      case FETCH_COMMENTS_FAILURE:
        return {
          ...state,
          pending: false,
          comments: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };