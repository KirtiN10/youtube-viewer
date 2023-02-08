import {
  FETCH_VIDEO_REQUEST,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAILURE,
} from "./actionTypes";

export interface IVideo {
  userId?: number;
  kind?: string;
  etag?: string;
  completed?: boolean;
}
export interface VideoProps {
  etag: string;
  id: {
    videoId: string;
    kind: string;
  };
  snippet: {
    title: string;
    description?: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

export interface VideoState {
  pending: boolean;
  videos: Array<TemplateStringsArray>;
  error: string | null;
}

export interface FetchVideoSuccessPayload {
  videos: {};
}

export interface FetchVideoFailurePayload {
  error: string;
}

export interface FetchVideoRequest {
  type: typeof FETCH_VIDEO_REQUEST;
  payload: string;
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
