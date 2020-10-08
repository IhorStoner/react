import React, { Component } from 'react'
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
import '../../node_modules/@glidejs/glide/dist/glide.min.js';
import Glide from '@glidejs/glide';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Slider extends Component {

  state = {
    pause: true,
  }
  
  componentDidMount = () => {
    this.glide = new Glide('.glide',this.props.config).mount()
  }

  componentDidUpdate = () => {
    this.glide.update(this.props.config);
  }

  componentWillUnmount = () => {
    this.glide.destroy();
  }


  render() {
    const images = this.props.children

    return (
      <>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {
              images.map((img,i) => (
                <li key={i} className="glide__slide">
                  {img}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
      </div>
      </>
    )
  }
}
