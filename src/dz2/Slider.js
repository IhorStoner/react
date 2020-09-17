import React, { Component } from 'react'
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
import '../../node_modules/@glidejs/glide/dist/glide.min.js';
import Glide from '@glidejs/glide';


export default class Slider extends Component {

  componentDidMount = () => {
    const config = {
      type: 'carousel',
      perView: 2,

    }

    new Glide('.glide',config).mount()
  }

  componentDidUpdate = () => {
 
   
  }

  render() {
    const images = this.props.children

    return (
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            {
              images.map((img,i) => (
                <li key={i} class="glide__slide">
                  {img}
                </li>
              ))
            }
            
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
      </div>
    )
  }
}
