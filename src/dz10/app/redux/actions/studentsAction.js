import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { AuthContext } from '../../context/AuthContext';
import React,{ useContext } from 'react'
import axios from 'axios'

// const {token} = useContext(AuthContext)

export const fetchStudents = createAsyncThunk('students/fetchStudents', async (token) => {
  const data = axios.get('http://localhost:5000/api/students',{headers: {authorization: `Bearer ${token}`} }).then(
    res => res.data)
  return data;
});

export const updateStudent = createAction('UPDATE_STUDENT');

export const removeStudent = createAsyncThunk('students/removeStudents', async (id,token) => {
  console.log(id)
  const data = axios.delete(`http://localhost:5000/api/students/${id}`,{headers: {authorization: `Bearer ${token}`} }).then(
    res => res.data)
  return data;
});