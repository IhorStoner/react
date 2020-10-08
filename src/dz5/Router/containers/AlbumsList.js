import React, {useEffect, useState} from 'react'
import { 
  useParams, 
  Redirect,NavLink,  
 } from 'react-router-dom'
import {Card,Header} from 'semantic-ui-react'




export default function AlbumsList() {
  const [albums,setAlbums] = useState([]);
  const { userId } = useParams();
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(response => response.json())
      .then(albums => {
        setAlbums(albums);
      })
  }, [userId]);

  return (
    <div>
      <Header as='h2'>
        Albums:
      </Header>
          {
            albums.map(album => (
              <NavLink to={`/albums/${userId}/${album.id}`} marginbottom='20'>
                <Card
                key={album.id}
                link
                header={
                  album.title
                }
                description={album.body}
                />
              </NavLink>
            ))
          }
    </div>
  )
}
