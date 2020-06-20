import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "../redux/action";
class UserItem extends Component {
  render() {
    let {user} = this.props
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={()=>{this.props.handleEdit(user)}}
          >
            Edit
          </button>
          <button className="btn btn-danger"
           onClick={()=>{this.props.handleDelete(user)}}
          >Delete</button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
   return {
      handleDelete: (user) => {
        // console.log(user); 
       dispatch(action.actDeteUser(user))
      },
      handleEdit: (user) => {
        let action = {
          type: "EDIT",
          data: user
        }
        dispatch(action)
      }
   }
}

export default connect(null,mapDispatchToProps)(UserItem);
