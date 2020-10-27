import { createReducer } from "@reduxjs/toolkit";
import { fetchGists } from '../actions/gistsAction';

const initialState = {
  loading: false,
  data: [],
  error: null
};

const gistsReducer = createReducer(initialState, {
  [fetchGists.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [fetchGists.fulfilled]: (state, action) => {
    state.data = action.payload.map(gist => ({
      ...gist,
      files: Object.values(gist.files)
    }));
    state.loading = false;
  },
  [fetchGists.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload.error;
  }
});

export default gistsReducer;