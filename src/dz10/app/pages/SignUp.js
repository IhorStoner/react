import React, { useCallback, useState } from 'react'
import { Header, Message } from 'semantic-ui-react'
import SignUpForm from '../components/form/SignUpForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [ signUpSuccess, setSignUpSuccess ] = useState(false);

  const onSubmit = useCallback(async values => {
    const result = await axios.post('http://localhost:5000/api/signup', values)
    setSignUpSuccess(true)
  },[])
  
  return (
    <div>
      { signUpSuccess ? 
        <Message
          success
          header='Вы успешно зарегистрировались!'
          content={<Link to='/signin'>Войти</Link>}
        />

      :
        <div>
          <Header as='h2'>Заполните поля что-бы зарегистрироваться</Header>
          <SignUpForm onSubmit={onSubmit}/>
        </div>
      }
    </div>
  )
}
