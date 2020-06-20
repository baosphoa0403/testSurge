import React, { Component } from "react";
import {connect} from "react-redux"
import * as action from "./../redux/action"
class Search extends Component {
  render() {
    return <input onChange={(e)=>{this.props.getKeyWord(e.target.value)}} type="text" className="form-control mb-3 w-50" />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getKeyWord: (keyword) => {
      dispatch(action.actGetKeyWord(keyword));
    }
  }
}
export default connect (null, mapDispatchToProps)(Search);
