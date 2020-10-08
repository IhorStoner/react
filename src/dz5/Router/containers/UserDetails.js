import React, { useEffect, useState } from 'react';
import { 
  useParams, 
  Redirect,NavLink,  
  useRouteMatch
 } from 'react-router-dom'
import { Card, Loader,Grid,GridColumn } from "semantic-ui-react";

function UserDetails() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(user => {
        setUserDetails(user);
      })
  }, [userId]);

  if (userDetails === null) return <Loader size='small' active />;

  if (!userDetails.id) {
    return <Redirect to='/'/>
  }

  return (
    <div className='user-details-page'>
      <Card
        image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        header={userDetails.name}
        meta={userDetails.company.name}
        description={
        <Grid columns={2}>
          <GridColumn>
            <NavLink to={`/posts/${userId}`}>Posts</NavLink>
          </GridColumn>
          <GridColumn>
            <NavLink to={`/albums/${userId}`}>Albums</NavLink>
          </GridColumn>
        </Grid>
       
        }
      />
    </div>
  );
}

export default UserDetails;
