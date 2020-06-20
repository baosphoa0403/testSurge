import React, { Component } from "react";
import { thisExpression } from "@babel/types";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: ""
      },
      errors: {
        manv: "",
        tennv: "",
        email: ""
      },
      formValid: false,
      manvValid: false,
      tennvValid: false,
      emailValid: false

    };
  }
  handleOnchange = event => {
    console.log(event.target.name, event.target.value);
    let { name, value } = event.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value }
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleErrors = (event) => {
    let { name, value } = event.target;
    let mess = value === "" ? name + "khong duoc rong" : "";
    // cập nhật lỗi
    this.setState({
      errors: { ...this.state.errors, [name]: mess }
    },()=>{console.log(this.state.errors);
    });
    // abc 
   let {manvValid, emailValid, tennvValid} = this.state;
    switch (name) {
        case "manv":
            manvValid = mess !== "" ? false : true;
            if (value !== "" && value.length < 4) {
                manvValid = false;
                mess  = "Do dài phải lớn hơn 4 ký tự"
            }
            break;
        case "tennv":
                tennvValid = mess !== "" ? false : true;
                if (value !== "" && value.length < 4) {
                    tennvValid = false;
                    mess  = "Do dài phải lớn hơn 4 ký tự"
                }
            break;
        case "email":
                emailValid =  mess !== "" ? false : true;
                if (value !== "" && !value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                      emailValid = false;
                      mess = "Email ko đúng định dạng"
                }
            break;
        default:
            break;
    }
    this.setState({
        errors: {...this.state.errors, [name]: mess},
        manvValid,
        tennvValid,
        emailValid
    },()=>{
      this.validationForm();
    })

  };
  validationForm = () => {
    let {manvValid, emailValid, tennvValid} = this.state;
    this.setState({
        formValid: manvValid && emailValid && tennvValid
    })
  }
  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input
              name="manv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
              type="text"
              className="form-control"
              name="manv"
            />
            {this.state.errors.manv !== "" ? (<div className="alert alert-danger">{this.state.errors.manv}</div>):("")}
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input
              name="tennv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
              type="text"
              className="form-control"
              name="tennv"
            />
             {this.state.errors.tennv !== "" ? (<div className="alert alert-danger">{this.state.errors.tennv}</div>):("")}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
              type="email"
              className="form-control"
              name="email"
            />
             {this.state.errors.email!== "" ? (<div className="alert alert-danger">{this.state.errors.email}</div>):("")}
          </div>
          <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
