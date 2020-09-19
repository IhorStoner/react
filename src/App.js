import React, { Component } from 'react';
import './App.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
// eslint-disable-next-line
import ProductTable from './dz1/ProductTable';
// eslint-disable-next-line
import Blog from './dz3/life-cycle-hooks/Blog';
import Slider from './dz2/Slider';

class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        {/* <ProductTable></ProductTable> */}
        {/* <Blog></Blog> */}
        <Slider options={{type:'carousel',perView:2,startAt:1,autoplay:1000}}>
          <img src='https://funik.ru/wp-content/uploads/2018/10/0a37dbac85e134cfb3a5-700x394.jpg' height='500' alt='img1'></img>
          <img src='http://www.poleteli.ru/uploads/posts/2015-03/1425394409_wistaria2.jpg' height='500' alt='img2'></img>
          <img src='https://ru.diez.md/wp-content/uploads/2019/08/d79168a24069b3a9722ec91169074f8e-2.jpg' height='500' alt='img3'></img>
        </Slider>
      </div>
    )

  }
}

export default App;
