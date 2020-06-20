import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "giang",
            islogin: false
        }
    }
    
    hanldeLogin = () => {
      this.setState({
          islogin: true
      })
    }
    renderLogin = () =>{
      let {islogin} = this.state;
      return islogin ? ( <p>name: {this.state.name}</p>) : (<button onClick={this.hanldeLogin}>Đăng nhập</button>);
    }
    render() {
        console.log("render");
        
        return (
            <div>
                {this.renderLogin()}
            </div>
        )
    }
}
// state thay đổi render chạy lại 
// khi nào cần thay đổi biến thì lưu nó ở state

