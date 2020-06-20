import React, { Component } from "react";

class Movie extends Component {

    render() {
        let { item } = this.props;
        return (
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={item.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <p className="card-text">{item.moTa}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;
