import React, { Component  } from 'react'
import Movie from './Movie';
import Axios from "axios";
import {connect} from "react-redux";
import * as action from "../redux/action"
class ListMovie extends Component {
     constructor(props){
         super(props);
         this.state={
             arr: []
         }
    }
    renderListMovie = () => {
        return this.props.listMovie.map((item, index)=>{
            return <Movie key={index} item = {item} /> 
        })
    }
    componentDidMount(){
      this.props.sendListMovie()
    }
    render() {
        console.log(this.props.listMovie);
        
        return (
            <div className="container">
                <h1 className="text-center"> ListMovie</h1>
                <div className="row">
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
       sendListMovie : () => {
        //    disptach qua file index action
         dispatch(action.getListMovieAPI());
        // let action = {
        //     type: "SEND_LIST_MOVIE",
        //     data: listMovie
        // }   
        // dispatch(action)        
       }
    }
}
const mapStateToProps = (state) => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(ListMovie)