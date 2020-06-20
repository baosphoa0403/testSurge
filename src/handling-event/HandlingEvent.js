import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    showNoParam = () => {
        alert("hello everyone");
    }
    showYesParam = (data) => {
        alert(data);
    }
    render() {
      
        return (
            <div>
                <h3>handling Event</h3>
{/* ko có tham số  */}
                <button className="btn btn-danger" onClick={this.showNoParam}>show mess with param</button>
                {/* <button onClick={this.showYesParam.bind(this, "hello gia bảo")}> show mess with param </button> */}
{/* có tham số  */}
                <button onClick={()=>{this.showYesParam("hello")}}> show mess with param </button>
            </div>
        )
    }
}
