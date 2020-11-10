import React,{useCallback} from 'react'
import { Header } from 'semantic-ui-react'
import UpdateStudentForm from '../components/form/UpdateStudentForm'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

export default function UpdateStudentPage() {
  const { studentId } = useParams()
  const history = useHistory();

  const onSubmit = useCallback(async values => {
    const result = await axios.put(`http://localhost:5000/api/students/${studentId}`, values)
    history.push('/students')
  },[])

  return (
    <div>
      <Header>Update student:</Header>
      <UpdateStudentForm onSubmit={onSubmit}></UpdateStudentForm>
    </div>
  )
}
