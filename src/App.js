import React, { Component } from 'react';
import './App.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
// eslint-disable-next-line
import ProductTable from './dz1/ProductTable';
// eslint-disable-next-line
import Blog from './dz3/life-cycle-hooks/Blog';
// eslint-disable-next-line
import Slider from './dz2/Slider';
import Components from './dz4/Components';
import ThemeContext from './dz5/context/ThemeContext';
import {Container} from 'semantic-ui-react';
import BlogV2 from './dz5/Router/Blog';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    }
  }

  render() {
    const { theme } = this.state
    return (
      <div className='wrapper'>
        {/* <ProductTable></ProductTable> */}
        {/* <Blog></Blog> */}
        {/* <Slider config={{type:'carousel',perView:2,startAt:1,autoplay:1000}}>
          <img src='https://funik.ru/wp-content/uploads/2018/10/0a37dbac85e134cfb3a5-700x394.jpg' height='500' alt='img1'></img>
          <img src='http://www.poleteli.ru/uploads/posts/2015-03/1425394409_wistaria2.jpg' height='500' alt='img2'></img>
          <img src='https://ru.diez.md/wp-content/uploads/2019/08/d79168a24069b3a9722ec91169074f8e-2.jpg' height='500' alt='img3'></img>
        </Slider> */}
        {/* <Components></Components> */}
        <ThemeContext.Provider value={theme}>
          <Container className='page'>
            <BlogV2 />
            {/* <BlogV3></BlogV3> */}
          </Container>
        </ThemeContext.Provider>
      </div>
    )

  }
}

export default App;
