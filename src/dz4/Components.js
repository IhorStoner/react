import React from 'react';
import useLocalStorage from './customHooks/useLocalStorage';
import { Header,Input } from 'semantic-ui-react';
import useDocumentTitle from './customHooks/useDocumentTitle';
import useOnlineStatus from './customHooks/useOnlineStatus'

export default function Components() {
  const [ name, setName ] = useLocalStorage('name','Bob');
  const [ title, setTitle ] = useDocumentTitle('Занятия | Hillel LMS')
  const online = useOnlineStatus();

  console.log(`User is online: ${online}`)

  return (
    <div>
      <Header as='h1'>{title}</Header>
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}>
      </Input>
      <Input
        type="text"
        placeholder="Enter new title"
        value={title}
        onChange={e => setTitle(e.target.value)}>
      </Input>
    </div>
  )
}
