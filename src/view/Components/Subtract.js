import React, { Component } from 'react';
import '../App.css';

export default class Subtract extends Component {
  
  constructor(props) {
    super(props)
  }
  
  subtract = () => {
    const {num} = this.props
    // todo 加
    
  }
  
  render() {
    return (
      <span className="button" onClick={this.subtract}>-</span>
    );
  }
}

