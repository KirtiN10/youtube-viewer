import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_SUCCESS,
  } from "./actionTypes";
  import {
    FetchCommentsRequest,
    FetchCommentsSuccess,
    FetchCommentsSuccessPayload,
    FetchCommentsFailure,
    FetchCommentsFailurePayload,
  } from "./types";
  
  export const fetchCommentsRequest = (videoId : any): FetchCommentsRequest => {
    console.log(videoId);
    return ({
      type: FETCH_COMMENTS_REQUEST,
      payload: videoId,
    });
  }

  export const fetchCommentsSuccess = (
    payload: FetchCommentsSuccessPayload
  ): FetchCommentsSuccess => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload,
  });
  
  export const fetchCommentsFailure = (
    payload: FetchCommentsFailurePayload
  ): FetchCommentsFailure => ({
    type: FETCH_COMMENTS_FAILURE,
    payload,
  });