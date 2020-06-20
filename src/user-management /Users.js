import React, { Component } from "react";
import UserItem from "./UserItem";
import {connect} from "react-redux";
class Users extends Component {
  renderTable = () => {
    let {userList, keyWord} = this.props;
    userList = userList.filter((user)=>{
      return user.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
    })
    return userList.map((user, index)=>{
      return  <UserItem user={user} key={index}/>
    })
  }
  render() {
   
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
           {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    keyWord: state.userManagement.keyWord

  }
}

export default connect (mapStateToProps, null) (Users);
