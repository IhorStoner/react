import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFiles = createAsyncThunk('files/fetchFiles', async ({files,gistId}) => {
  const request = files.map(file => fetch(file.raw_url).then(res => res.text()))
  return await Promise.all(request)
},
  {
    condition: ({ gistId }, thunkApi) => {
      const { files } = thunkApi.getState();
      return !files.data[gistId]
    }
  }
)