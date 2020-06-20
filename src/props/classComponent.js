import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <p>{this.props.username}</p>
            </div>
        );
    }
}

export default ClassComponent;