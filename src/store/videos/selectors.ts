import { createSelector } from "reselect";

const getPending = (state: {
  videos: {
    pending: boolean;
  };
}) => state.videos.pending;

const getVideos = (state: { videos: [] }) => state.videos;

const getError = (state: {
  videos: {
    error: string | boolean;
  };
}) => state.videos.error;

export const getVideosSelector = createSelector(getVideos, (videos) => videos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);