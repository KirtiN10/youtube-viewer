import { createSelector } from "reselect";

const getPending = (state: any) => state.comments.pending;

const getComments = (state: any) => state.comments;

const getError = (state: any) => state.comments.error;

export const getCommentsSelector = createSelector(getComments, (comments) => comments);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);