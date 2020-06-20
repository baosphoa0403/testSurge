import React, { Component } from 'react';

class Child extends Component {
    UNSAFE_componentWillReceiveProps(nextProps){
       console.log("UNSAFE_componentWillReceiveProps", nextProps);
       
    }
    render() {
        return (
            <div>
                <h3 className="text-center">Child</h3>
                <h3>username child: {this.props.username}</h3>
            </div>
        );
    }
}

export default Child;