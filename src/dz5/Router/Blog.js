import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
} from "react-router-dom";
import Users from "./containers/Users";
import Page404 from "./containers/404";
import UserDetails from "./containers/UserDetails";
import AlbumsList from './containers/AlbumsList';
import PostsList from './containers/PostsList';
import AlbumPhotos from './containers/AlbumPhotos'
import { Grid, GridColumn } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from "react-transition-group";


const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup className="transition-group">
    <CSSTransition key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade">
      <section className="route-section">
      <Switch location={location}>
         <Route path="/" exact>
            Home
          </Route>
          <Route path="/about" exact>
              Hello About
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path='/albums/:userId/:albumId'>
            <AlbumPhotos/>
          </Route>
          <Route path="/albums/:userId">
            <Grid columns={2}>
              <GridColumn>
                <AlbumsList />
              </GridColumn>
              <GridColumn>
                <UserDetails/>
              </GridColumn>
            </Grid>
          </Route>
          <Route path="/posts/:userId">
          <Grid columns={2}>
            <GridColumn>
              <PostsList />
            </GridColumn>
            <GridColumn>
              <UserDetails/>
            </GridColumn>
          </Grid>
          </Route>
          <Route path="/people/:userId">
            <UserDetails />
          </Route>
          <Route path='*'>
            <Page404 />
          </Route>
      </Switch>
      </section>
    </CSSTransition>
  </TransitionGroup>
));

function Blog() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName='active' to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='active' to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <AnimatedSwitch></AnimatedSwitch>
      </div>
    </Router>
  );
}

export default Blog;
