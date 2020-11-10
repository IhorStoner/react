import React, { useState, useContext,useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
import {List, Image, Button,Icon, Input } from 'semantic-ui-react'
import {fetchStudents, updateStudent,removeStudent} from '../redux/actions/studentsAction'
import {useDispatch, useSelector} from 'react-redux'
import { getStudents } from '../redux/selectors/studentsSelector';
import {Link} from 'react-router-dom'

export default function Students() {
  const { token } = useContext(AuthContext)
  const dispatch = useDispatch();  
  const students = useSelector(getStudents);

  useEffect(() => {
    dispatch(fetchStudents(token));
  }, []);

  return (
    <div>
      <List divided verticalAlign='middle'>
        {students.map(student => (
          <List.Item>
            <List.Content floated='right'>
              <Link to={`/students/updateStudent/${student._id}`}>
                <Button>Update</Button>
              </Link>
              <Button onClick={() => dispatch(removeStudent(student._id,token))}>Delete</Button>
            </List.Content>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
            <List.Header>{student.name}</List.Header>
            <List.Content>Email: {student.email}</List.Content>
            <List.Content>Phonenumber: {student.phonenumber}</List.Content>
            <List.Content>Group: {student.group}</List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  )
}
