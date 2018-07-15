import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Add from './Components/Add'
import Subtract from './Components/Subtract'
import Button from './Components/Button'

import * as Actions from './Actions'


import './App.css';

export default class App extends Component {
  
  static contextTypes = {
    store: PropTypes.object
  }
  
  constructor(props, context) {
    super(props, context)
    this.state = this.getState()
  }
  
  onChange = () => {
    this.setState(this.getState())
  }
  
  componentDidMount() {
    // 监听 store 的变化
    this.context.store.subscribe(this.onChange)
  }
  
  componentWillUnmount() {
    // 去掉监听
    this.context.store.unsubscribe(this.onChange);
  }
  
  getState = () => {
    return this.context.store.getState()
  }
  
  subtract = () => {
    const {num} = this.props
    // todo 减
    this.context.store.dispatch(Actions.subtractAction())
  }
  
  add = () => {
    const {num} = this.props
    // todo 加
    this.context.store.dispatch(Actions.addAction())
  
  }
  
  render() {
    const {total} = this.state
    console.log('this.context', this.context.store)
    return (
      <div className="App">
        <header className="App-header">
          Redux Test
        </header>
        <div className="content-wrapper">
          <Button content="-" onClick={this.subtract}/>
          <span className="num">{total}</span>
          <Button content="+" onClick={this.add}/>
        </div>
      </div>
    );
  }
}

