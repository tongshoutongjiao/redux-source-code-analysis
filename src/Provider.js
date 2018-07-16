import { Component, Children } from 'react';
import PropTypes from 'prop-types'

// Provider 是一个装饰器
export function createProvider(storeKey = 'store') {
  class Provider extends Component{
  
    // 返回 Context 对象，方法名是约定好的
    getChildContext() {
      return {
        [storeKey]: this[storeKey]
      }
    }
  
    constructor(props, context) {
      super(props, context)
      this[storeKey] = props.store
    }
    
    render() {
      return Children.only(this.props.children)
    }
  }
  
  Provider.propTypes = {
    store: PropTypes.object,
    children: PropTypes.element.isRequired
  }
  
  // 声明 Context 对象属性
  Provider.childContextTypes = {
    [storeKey]: PropTypes.object,
  }
  
  return Provider
}

export default createProvider()