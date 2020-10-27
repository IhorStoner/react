import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGists = createAsyncThunk('gists/fetchGists', async () => {
  const data = await fetch('https://api.github.com/gists/public').then(res => res.json());
  return data;
});

const productsSlice = createSlice({
  name: 'gists',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchGists.pending]: (state) => {
      state.loading = true;
      state.error = null
    },
    [fetchGists.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchGists.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.error = action.payload.error;
    }
  },
});

export default productsSlice.reducer;

export { fetchGists };