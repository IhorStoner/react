import { createSelector } from '@reduxjs/toolkit'

export const getGists = createSelector(
  state => state.gists.data,
  gists => gists
);


export const getGistsLoading = createSelector(
  state => state.gists.loading,
   loading => loading
);

export const getGistById = createSelector(
  getGists,
  (_,gistId) => gistId,
  (gists, gistId) => gists.find(gist => gist.id === gistId)
)