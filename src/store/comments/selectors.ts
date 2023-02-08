import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.comments.pending;

const getComments = (state: AppState) => state.comments;

const getError = (state: AppState) => state.comments.error;

export const getCommentsSelector = createSelector(getComments, (comments) => comments);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);