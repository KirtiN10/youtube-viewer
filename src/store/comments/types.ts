import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
  } from "./actionTypes";
  
  export interface Icomments {
    userId: number;
    kind: string;
    etag: string;
    completed: boolean;
  }
  
  export interface CommentsState {
    pending: boolean;
    comments: Array<TemplateStringsArray>;
    error: string | null;
  }
  
  export interface FetchCommentsSuccessPayload {
    comments: Icomments[];
  }
  
  export interface FetchCommentsFailurePayload {
    error: string;
  }
  
  export interface FetchCommentsRequest {
    type: typeof FETCH_COMMENTS_REQUEST;
    payload: any;
  }

  export type FetchCommentsSuccess = {
    type: typeof FETCH_COMMENTS_SUCCESS;
    payload: FetchCommentsSuccessPayload;
  };
  
  export type FetchCommentsFailure = {
    type: typeof FETCH_COMMENTS_FAILURE;
    payload: FetchCommentsFailurePayload;
  };
  
  export type CommentsActions =
    | FetchCommentsRequest
    | FetchCommentsSuccess
    | FetchCommentsFailure;