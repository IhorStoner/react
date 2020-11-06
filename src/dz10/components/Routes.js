import React  from "react";
import { Container, Header } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch, Link } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import SignUp from "./containers/SingUp";

export default function Routes() {
  return (
    <Container className='page'>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>CRUD App</NavLink>
        </Header>
        <Switch>
          <Route path='/' exact>
             <Link to='/singup'>Нажмите что-бы войти</Link>
          </Route>
          <Route path='/signup' component={SignUp} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Container>
  )
}