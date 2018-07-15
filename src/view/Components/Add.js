import React, { Component } from 'react';
import '../App.css';

export default class Add extends Component {
  
  constructor(props) {
    super(props)
  }
  
  add = () => {
    const {num} = this.props
    // todo 加
    
  }
  
  render() {
    return (
      <span className="button" onClick={this.add}>+</span>
    );
  }
}

