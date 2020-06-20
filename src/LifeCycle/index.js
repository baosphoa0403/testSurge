import React, { Component } from 'react'
import Child from "./child"
import Pure from './pure';

export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            username: "FPT"
        }
    }
    UNSAFE_componentWillMount(){
        console.log("hi-ComponentWillMount");
    }
    componentDidMount(){
        // B1 call Api gửi lên store 
        console.log("ho-ComponentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        console.log(nextProps, nextState);
        if (nextState.username === "ABC") {
            return true;
        }
        return false;
    }
    componentDidUpdate(){
        console.log("hu-componentDidUpdate");
    }
    componentWillUpdate(){
        console.log("ha-componentWillUpdate");
    }


    
    render() {
        // sử dụng api từ store lấy ra để render data ra 
        console.log("render");
        return (
            <div>
                <h3 className="text-center">Lifecycle</h3>
                <p>tên trường: {this.state.username}</p>
                <button className="btn btn-danger" onClick={()=>{this.setState({
                    username: "ABC"
                })}}>Click</button>
                {/* child component */}
                {/* <Child username={this.state.username}/> */}
                {/* Pure component */}
                {/* <Pure  /> */}
            </div>
        )
    }
}
// mapStateTop