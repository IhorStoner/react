import React from 'react'
import { NavLink } from 'react-router-dom';
import { List,Header,Image } from 'semantic-ui-react'

function GistItem({ gist }) {
  return (
    <List.Item>
      <Image avatar src={gist.owner.avatar_url} />
      <List.Content>
        <List.Header as='a'>
          <NavLink to={`/${gist.id}`}>
            {gist.files.map(file => file.filename).join(',')}
          </NavLink>
        </List.Header>
        <List.Description as='a'>{gist.language}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default function GistsList({ gists }) {

  return (
    <div>
      <Header as='h2'>Gist List:</Header>
      <List divided relaxed>
        {
          gists.map(gist => <GistItem gist={gist}></GistItem>)
        }
      </List>
    </div>
  )
}
