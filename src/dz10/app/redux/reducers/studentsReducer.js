import { createReducer } from "@reduxjs/toolkit";
import { fetchStudents,updateStudent,removeStudent } from '../actions/studentsAction';


const initialState = {
  loading: false,
  data: [],
  error: null
};

const studentsReducer = createReducer(initialState, {
  [fetchStudents.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [fetchStudents.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.loading = false;
  },
  [fetchStudents.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload.error;
  },
  [updateStudent.type]: (state, action) => {
   
  },
  [removeStudent.fulfilled]: (state, action) => {
    const selectedStudent = state.data.findIndex(student => student._id === action.payload._id)
    state.data.splice(selectedStudent, 1);
  }
});


export default studentsReducer;