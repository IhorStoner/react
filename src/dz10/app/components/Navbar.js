import React, { useContext, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink,useHistory } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export default function Navbar() {
  const [ activeItem, setActiveItem ] = useState('students')
  const auth = useContext(AuthContext)
  const history = useHistory();

  const logout = () => {
    auth.logout()
    history.push('/')
  }

  return (
    <div>
        <Menu pointing secondary>
          <NavLink to='/students'>
            <Menu.Item
              name='students'
              active={activeItem === 'students'}
              onClick={() => setActiveItem('students')}
            />
          </NavLink>
          <NavLink to='/students/newStudent'>
            <Menu.Item
              name='newStudent'
              active={activeItem === 'newStudent'}
              onClick={() => setActiveItem('newStudent')}
            />
          </NavLink>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={() => logout()}
            />
          </Menu.Menu>
        </Menu>
    </div>
  )
}
