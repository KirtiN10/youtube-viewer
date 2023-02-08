import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.videos.pending;

const getVideos = (state: AppState) => state.videos;

const getError = (state: AppState) => state.videos.error;

export const getVideosSelector = createSelector(getVideos, (videos) => videos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);