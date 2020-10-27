import { createSelector } from '@reduxjs/toolkit'

export const getFiles = createSelector(
  state => state.files.data,
  files => files
)

export const getFilesLoading = createSelector(
  state => state.files.loading,
  loading => loading
)

export const getFileByGistId = createSelector(
  getFiles,
  (_,gistId) => gistId,
  (files, gistId) => files[gistId] || []
)