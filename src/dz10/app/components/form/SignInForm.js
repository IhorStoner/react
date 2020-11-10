import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import './SignInForm.scss'
import TextField from './TextField'

function SignInForm({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <Field className='signUpForm__input' name='email' label='Email' component={TextField} placeholder='test@gmail.com'></Field>
      </div>
      <div className='form-row'>
      <Field className='signUpForm__input' name='password' label='Password' type='password' component={TextField} placeholder='******'></Field>
      </div>
      <Button type='submit'>Войти</Button>
    </form>
  )
}

export default reduxForm({
  form: "signIn",

})(SignInForm);