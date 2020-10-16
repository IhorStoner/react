import React, { Component } from 'react';
import './App.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
// import ProductTable from './dz1/ProductTable';
// import Blog from './dz3/life-cycle-hooks/Blog';
// import Slider from './dz2/Slider';
// import Components from './dz4/Components';
// import ThemeContext from './dz5/context/ThemeContext';
// import {Container} from 'semantic-ui-react';
// import BlogV2 from './dz5/Router/Blog';
import Shop from './dz6/Shop'
import { Provider } from 'react-redux';
import createStore from './dz6/redux/createStore';
import { saveLocal } from './dz6/helpers/localStorage'

const store = createStore();

store.subscribe(()=>{
  saveLocal('basket',store.getState().products.basket)
})

class App extends Component {

  render() {
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
        {/* <ThemeContext.Provider value={theme}>
          <Container className='page'>
            <BlogV2 />
          </Container>
        </ThemeContext.Provider> */}
        <Provider store={store}>
          <Shop></Shop>
        </Provider>
      </div>
    )

  }
}

export default App;
