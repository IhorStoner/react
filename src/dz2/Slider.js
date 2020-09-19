import React, { Component } from 'react'
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
import '../../node_modules/@glidejs/glide/dist/glide.min.js';
import Glide from '@glidejs/glide';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Slider extends Component {

  state = {
    config: {
      type: this.props.options.type ? this.props.options.type : null, // slider or carousel
      startAt: this.props.options.startAt ? this.props.options.startAt : null, //type number
      perView: this.props.options.perView ? this.props.options.perView : null, //type number
      autoplay: this.props.options.autoplay ? this.props.options.autoplay : null, // type number or bool
    },
    pause: true,
  }
  
  componentDidMount = () => {
    this.glide = new Glide('.glide',this.state.config).mount()
  }

  componentDidUpdate = () => {
    this.glide.update(this.state.config);
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
