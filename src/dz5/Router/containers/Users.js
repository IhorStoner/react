import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch,useParams } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn } from "semantic-ui-react";
import UserDetails from "./UserDetails";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => setUsers(users))
  }, []);

  const { path, url } = useRouteMatch();


  return (
    <Container>
      <Grid columns={2}>
        <GridColumn>
          <List>
            { users.map(user => (
              <List.Item key={user.id}>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                <List.Content>
                  <List.Header as='a'>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                  </List.Header>
                  <List.Description>
                    {user.email}, {user.phone}
                  </List.Description>
                </List.Content>
              </List.Item>
            )) }
          </List>
        </GridColumn>
        <GridColumn>
          <Switch>
            <Route path={`${path}/:userId`} exact>
              <UserDetails/>
            </Route>
          </Switch>
        </GridColumn>
      </Grid>
    </Container>
  );
}

export default Users;
