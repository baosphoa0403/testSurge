import React, { Component } from 'react'

export default class Listkey extends Component {
    constructor(props){
        super(props);
        this.state = {
            lisrProduct: [
                {id: 1, name: "IphoneX", price: 1000},
                {id: 2, name: "Iphone11", price: 2000},
                {id: 3, name: "Iphone12", price: 3000},
            ]
        }
    }
    rendeTable = () => {
        return this.state.lisrProduct.map((item)=>{
             return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
             )
        })
    }
    render() {
        return (
            <div>
                <h3>*Listkey</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.rendeTable()}
                    </tbody>
                </table>

            </div>
        )
    }
}
