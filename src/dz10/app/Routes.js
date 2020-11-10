import React from "react";
import { Header, Button } from "semantic-ui-react";
import { NavLink, Redirect, Route, Switch, Link } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Students from './pages/Students'
import UpdateStudentPage from './pages/UpdateStudentPage'
import AddNewStudentPage from "./pages/AddNewStudentPage";

export default function Routes ({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/students" exact>
          <Students></Students>
        </Route>
        <Route path='/students/newStudent'><AddNewStudentPage/></Route>
        <Route path='/students/updateStudent/:studentId'><UpdateStudentPage/></Route>
        <Redirect to='/students'/>
      </Switch>
    )
  }

  return (
    <div>
      <Header>
        <NavLink to='/'>CRUD App</NavLink>
      </Header>
      <Switch>
        <Route path='/' exact>
          <Link to='/signin'><Button>Войти</Button></Link>
          <Link to='/signup'><Button>Зарегистрироваться</Button></Link>
        </Route>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </div>
    
  )
}