import React from 'react'
import Routes from './Routes'
import { Container, Header,Button } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useAuth } from './hooks/useAuth'
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar'

export default function CrudApp() {
  const {token, login, logout, studentId, ready} = useAuth();
  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{token,login,logout,studentId,ready, isAuthenticated}}>
      <Container className='page'>
        <Router>
          { isAuthenticated && <Navbar/>} 
          <Routes isAuthenticated={ isAuthenticated }/>
        </Router>  
      </Container>
    </AuthContext.Provider>
  )
}
