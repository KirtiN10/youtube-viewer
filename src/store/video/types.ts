import {
    FETCH_VIDEO_REQUEST,
    FETCH_VIDEO_SUCCESS,
    FETCH_VIDEO_FAILURE,
  } from "./actionTypes";
  
  export interface IVideo {
    userId: number;
    kind: string;
    etag: string;
    completed: boolean;
  }
  
  export interface VideoState {
    pending: boolean;
    videos: Array<TemplateStringsArray>;
    error: string | null;
  }
  
  export interface FetchVideoSuccessPayload {
    videos: IVideo[];
  }
  
  export interface FetchVideoFailurePayload {
    error: string;
  }
  
  export interface FetchVideoRequest {
    type: typeof FETCH_VIDEO_REQUEST;
    term: any;
  }
  
  export type FetchVideoSuccess = {
    type: typeof FETCH_VIDEO_SUCCESS;
    payload: FetchVideoSuccessPayload;
  };
  
  export type FetchVideoFailure = {
    type: typeof FETCH_VIDEO_FAILURE;
    payload: FetchVideoFailurePayload;
  };
  
  export type VideoActions =
    | FetchVideoRequest
    | FetchVideoSuccess
    | FetchVideoFailure;