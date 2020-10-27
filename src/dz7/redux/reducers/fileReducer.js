import { createReducer } from "@reduxjs/toolkit";
import { fetchFiles } from '../actions/fileAction';

const initialState = {
  loading: false,
  data: {},
  error: null
};

const fileReducer = createReducer(initialState, {
  [fetchFiles.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [fetchFiles.fulfilled]: (state, action) => {
    state.data[action.meta.arg.gistId] = action.meta.arg.files.map((file,index) => ({
      ...file,
      fileContent: action.payload[index]
    }));
    state.loading = false;
  },
  [fetchFiles.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload.error;
  }
});

export default fileReducer;