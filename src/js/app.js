import React, { Component } from 'react';
import { render } from "react-dom";

import '../css/style.css';

import myImage from '../assets/img01.jpeg'

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello form react
        <img src={ myImage } alt=""/>
        malegejs
      </div>
    );
  }
}

render(<Hello/>, document.getElementById('app'));