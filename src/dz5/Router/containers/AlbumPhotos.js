import React, {useEffect, useState} from 'react'
import { 
  useParams,
  Redirect, useHistory
 } from 'react-router-dom'
import Slider from '../../../dz2/Slider'


export default function AlbumPhotos() {
  const { userId } = useParams();
  const [ album, setAlbum ] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
      .then(response => response.json())
      .then(album => {
        setAlbum(album);
      }) 
  }, [userId]);
  

  return (
    <div>
      <h2>Album</h2>
      {
        album.length !== 0 ?
        <Slider config={{type:'slider',startAt: 0,perView: 2,}}>
          {
            album.map(item => 
              <img key={item.id} src={item.url} alt={item.id}/>
            )
          }
        </Slider>
        : null
      }
    </div>
  )
}
