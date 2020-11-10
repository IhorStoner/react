import React, {useCallback} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import AddNewStudentForm from '../components/form/AddNewStudentForm'

export default function AddNewStudentPage() {
  const history = useHistory();

  const onSubmit = useCallback(async values => {
    const result = await axios.post(`http://localhost:5000/api/students/`, values)
    history.push('/students')
  },[])

  return (
    <div>
      <Header>New student:</Header>
      <AddNewStudentForm onSubmit={onSubmit}/>
    </div>
  )
}
