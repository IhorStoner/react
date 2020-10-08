import React, {useEffect, useState} from 'react'
import { 
  useParams,
 } from 'react-router-dom'
import Slider from '../../../dz2/Slider'


export default function AlbumPhotos() {
  const [ album, setAlbum ] = useState([]);
  const { userId, albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
      .then(response => response.json())
      .then(album => {
        setAlbum(album);
      })
  }, [albumId]);
  
  
  return (
    <div>
      <h2>Album</h2>
      {
        <Slider config={{type:'slider',startAt: 0,perView: 2,}}>
          {
            album.map(item => 
              <img key={item.id} src={item.url} height='500' alt={item.id}/>
            )
          }
        </Slider>
      }
    </div>
  )
}
