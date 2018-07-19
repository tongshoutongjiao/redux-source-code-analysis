import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'


import Button from './Components/Button'

import * as Actions from './Actions'

import './App.css';

class App extends Component {

  subtract = () => {
    //  减
    this.props.subtractAction()
  }
  
  add = () => {
    //  加
    this.props.addAction()
  
  }
  
  render() {
    const {total} = this.props
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

const mapStateToProps = (state) => ({
  total: state.total
})

const marDispatchToProps = dispatch => {
  return bindActionCreators({
    ...Actions
  }, dispatch)
}

export default connect(mapStateToProps, marDispatchToProps)(App)