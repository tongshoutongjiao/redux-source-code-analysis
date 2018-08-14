import { Component, Children } from 'react';
import PropTypes from 'prop-types'

class Provider extends Component{

  // 返回 Context 对象，方法名是约定好的
  getChildContext() {
    return {
      store: this.store
    }
  }

  constructor(props, context) {
    super(props, context);
    this.store = props.store
  }
  
  render() {
    console.log(this);
    return Children.only(this.props.children)
  }
}

Provider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.element.isRequired
};

// 声明 Context 对象属性
Provider.childContextTypes = {
  store: PropTypes.object,
};
  
export default Provider