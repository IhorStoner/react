import React, { useCallback,useContext,useState,useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import { Header, Message } from 'semantic-ui-react'
import SignInForm from '../components/form/SignInForm'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

export default function SignIn() {
  const [ signInSuccess, setSignInSuccess ] = useState(false);
  const [ error, setError ] = useState('');
  const auth = useContext(AuthContext);

  const onSubmit = useCallback(async values => {
    const result = await axios.post('http://localhost:5000/api/signin', values)
    .then(res => {
      auth.login(res.data.token,res.data.id)
      setSignInSuccess(true)
      setError('')
    })
    .catch(err => {
      setError(err.response.data.error)
      setSignInSuccess(false)
    })
  },[])
  
  return (
    <div>
      <Header as='h2'>Введите почту и пароль что-бы войти</Header>
      <SignInForm onSubmit={onSubmit}/>
      {
        error &&
        <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>
      }
    </div>
  )
}
