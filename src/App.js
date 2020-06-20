import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Baitap1/Header';
import Content from './components/Baitap1/content';
import Slidebar from './components/Baitap1/slidebar';
import Footer from './components/Baitap1/footer';
import RenderingElement from './rendering-elements';
import HandlingEvent from './handling-event/HandlingEvent';
import State from './state';
import Listkey from './listkey';
import BaiTapCar from './BaiTapCar';
import LiftingStateUp from './lifting-state-up ';
import Props from './props';
import LiftingStateUpCart from './lifting-state-up-cart';
import LiftingStateUpCartRedux from './lifting-state-up-cart-redux';
import MasterialCarousel from './MasterialCarousel-1';
import Masterial2 from './masterial-2';
import UserManagementRedux from './user-management /Home';
import Lifecycle from './LifeCycle';
import FormValidation from './formValidation';
import CallAPI from './CallAPI/CallAPI';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './pages/home/Home';
import ListMovie from './CallAPI/ListMovie';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import About from './pages/home/About';

function App() {
  return (
    // <div>
    //   {/* buổi 1 */}
    //  {/* <Header />
    //   <div className="contents">
    //     <Content />
    //     <Slidebar />
    //   </div>
    //   <Footer /> */}
    //   {/* <RenderingElement /> */}
    //   {/* <HandlingEvent /> */}
    //   {/* <State /> */}
    //   {/* <Listkey /> */}
    //   {/* Buổi 2 */}
    //   {/* <BaiTapCar /> */}
    //   {/* <LiftingStateUp /> */}
    //   {/* <LiftingStateUpCart /> */}
    //   {/* <Props /> */}
    //   {/* <LiftingStateUpCartRedux /> */}
    //   {/* <MasterialCarousel /> */}
    //   {/* <Masterial2 /> */}
    //   {/* <UserManagementRedux /> */}
    //   {/* <Lifecycle /> */}
    //   {/* <FormValidation /> */}
    //   <CallAPI />
    // </div>
    <BrowserRouter>
   
    <Fragment>
      <Navbar />
       <Switch >
         <Route exact path="/" component={Home}/>
         <Route path="/list-movie" component={ListMovie}/>
         <Route path = "/about" component={About}/>
         {/* thường link ko xác định là phải để cuối nha  */}
         <Route  path="" component={PageNotFound}/>
      </Switch>
    </Fragment>
    
     
    </BrowserRouter>
  );
}

export default App;
