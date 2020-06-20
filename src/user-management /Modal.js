import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "./../redux/action"
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER"
    };
  }
  handleOnChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    }, ()=>{console.log(this.state);
    } );

  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.sendUser(this.state);
  };
  // chạy khi component này nhận dc cái props tiếp theo
  componentWillReceiveProps(nextProps){
      if (nextProps && nextProps.userEdit) {
        console.log(nextProps);
        // let {userEdit} = nextProps;
        this.setState({
          id: nextProps.userEdit.id,
          username: nextProps.userEdit.username,
          name: nextProps.userEdit.name,
          email: nextProps.userEdit.email,
          phoneNumber: nextProps.userEdit.phoneNumber,
          type: nextProps.userEdit.type
        })
      }else{
        console.log(nextProps);
        this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER"
        })
      }
  }
  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "Edit user" : "Add user"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChange}
                    value = {this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChange}
                    value = {this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChange}
                    value = {this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChange}
                    value = {this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type"  value = {this.state.type}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendUser: (user) => {
      dispatch(action.actSubmitUser(user))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    userEdit: state.userManagement.userEdit
  }
}
export default  connect(mapStateToProps, mapDispatchToProps) (Modal);
