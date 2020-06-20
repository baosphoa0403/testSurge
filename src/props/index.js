import React, { Component } from 'react';
import ClassComponent from './classComponent';
import FunctionComponent from './functionComponent';

class Props extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "tâm"
        };
    }

    render() {
        return (
            <div>
                <h1>Demo Props</h1>
                <h2>ClassComponent</h2>
                <ClassComponent username={this.state.username} />
                <h2>FuntionalComponent</h2>
                <FunctionComponent  username={this.state.username}/>
            </div>
        );
    }
}

export default Props;