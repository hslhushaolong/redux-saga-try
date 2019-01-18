/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as ActionCreators from './action';

// import ShopComponent from './component';
class Counter extends Component {
  constructor(props) {
    super(props)
    // this.bindActionCreators=bindActionCreators(ActionCreators);
    // console.log(this.boundActionCreators)
    console.log(props);
    this.state = {
       
    }
  }
  
  
  render() {
    const { value, onIncrementAsync, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        {' '}
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
          {/* <ShopComponent /> */}
        </div>
      </div>
    )
  }
}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

export default Counter
