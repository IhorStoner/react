import { createSelector } from '@reduxjs/toolkit'

export const getStudents = createSelector(
  state => state.students.data,
  students => students
);