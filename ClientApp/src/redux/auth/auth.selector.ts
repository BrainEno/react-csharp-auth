import { createSelector } from "reselect";

const selectUser = (state: any) => state.auth;

export const selectCurrentUser = createSelector(
  [selectUser],
  (auth) => auth.currentUser
);
