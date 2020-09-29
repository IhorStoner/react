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

  pauseSlider = () => {
    if(this.state.config.autoplay){
      this.setState({
        config: {
          autoplay: false,
        }
      })
    } else {
      this.setState({
        config: {
          autoplay: true,
        }
      })
    }
  }

  render() {
    const images = this.props.children

    return (
      <>
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
      <Button onClick={this.pauseSlider} >{this.state.pause ? 'Pause' : 'Play'}</Button>
      </>
    )
  }
}

Slider.propTypes = {
  type: PropTypes.string,
  startAt: PropTypes.number,
  perView: PropTypes.number,
  autoplay: PropTypes.bool || PropTypes.number,
};
