import React from 'react'
import { reduxForm, Field } from 'redux-form'
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import TextField from './TextField'

function UpdateStudent({handleSubmit, valid,submitting}) {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <Field className='form__input' name='name' label='Name' component={TextField} placeholder='Ivan Ivanov'></Field>
      </div>
      <div className='form-row'>
        <Field className='form__input' name='group' label='Group' component={TextField} placeholder='351a'></Field>
      </div>
      <div className='form-row'>
        <Field className='form__input' name='phonenumber' label='Phonenumber' component={TextField} placeholder='phonenumber'></Field>
      </div>
      <div className='form-row'>
        <Field className='form__input' name='email' label='Email' component={TextField} placeholder='test@gmail.com'></Field>
      </div>
      <div className='form-row'>
        <Field className='form__input' name='password' label='Password' type='password' component={TextField} placeholder='******'></Field>
      </div>
      <div className='form-row'>
        <Field className='form__input' name='repeatPassword' label='Repeat password' type='password' component={TextField} placeholder='******'></Field>
      </div>
      <Button type='submit' disabled={!valid && !submitting}>Update</Button>
    </form>
  )
}

const validate = values => {
  const errors = {};
  if(!values.name){
    errors.name = 'Required'
  }
  if(!values.group){
    errors.group = 'Required'
  }
  if(!values.phonenumber){
    errors.phonenumber = 'Required'
  }
  if(!values.email){
    errors.email = 'Required'
  }

  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(values.email)) {
    errors.email = 'Wrong email format!'
  }
  if(!values.password){
    errors.password = 'Required'
  }
  if(values.password !== values.repeatPassword){
    errors.repeatPassword = 'Password don`t match'
  }
  return errors
}

const asyncValidate = async values => {
  if (!values.email) return;
  const response = await axios.get(`http://localhost:5000/api/signup/is_exist?email=${values.email}`);
  if (response.data.is_exist) {
    throw { email: 'This email is already taken' }
  }
};

export default reduxForm({
  form: "updateStudent",
  validate,
  asyncValidate,
  asyncBlurFields: ['email']
})(UpdateStudent);
