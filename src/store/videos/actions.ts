import {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_FAILURE,
  FETCH_VIDEO_SUCCESS,
} from "./actionTypes";
import {
  FetchVideoRequest,
  FetchVideoSuccess,
  FetchVideoSuccessPayload,
  FetchVideoFailure,
  FetchVideoFailurePayload,
} from "./types";

export const fetchVideoRequest = (term: string): FetchVideoRequest => {
  return {
    type: FETCH_VIDEO_REQUEST,
    payload: term,
  };
};

export const fetchVideoSuccess = (
  payload: FetchVideoSuccessPayload
): FetchVideoSuccess => {
  return {
    type: FETCH_VIDEO_SUCCESS,
    payload,
  };
};

export const fetchVideoFailure = (
  payload: FetchVideoFailurePayload
): FetchVideoFailure => ({
  type: FETCH_VIDEO_FAILURE,
  payload,
});
