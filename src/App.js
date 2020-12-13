import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Main from './view/main';
import Item from './view/item'
import LoginPage from './view/loginpage'
import RegisterPage from './view/registerpage'
import Cellphone from './view/cellphone'
import Laptop from './view/laptop'
import Desktop from './view/desktop'
import GamingLaptop from './view/gaminglaptop'
import GamingDesktop from './view/gamingdesktop'
import Business from './view/business'
import HomeOffice from './view/homeoffice'
import RecommendationPage from "./view/recommendationpage"
import Navbar from './component/navbar'

import './App.css';
import Questions from './components/Questions';
import Test2 from './components/pages/Test2';
import Header from './components/layout/Header';
import firebase, { auth, provider } from './firebase.js';


class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            user: 'reset',
            isLogin: false,
        };
    }
    render(){
        console.log("user: " + this.state.user);
        console.log("isLogin: " + this.state.isLogin);
        return(

            <div>
                <Router>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/item" exact component={Item}></Route>
                    <Route 
                        path="/loginpage"
                        exact
                        render={
                            (props) => (<LoginPage {...props} usr={this.state.user} logn={this.state.isLogin} logIn={this.loggedIn} />)
                        }
                    />
                    <Route path="/registerpage" exact component={RegisterPage}></Route>
                    <Route path="/category/cellphone" exact component={Cellphone}></Route>
                    <Route path="/category/laptop" exact component={Laptop}></Route>
                    <Route path="/category/desktop" exact component={Desktop}></Route>
                    <Route path="/category/business" exact component={Business}></Route>
                    <Route path="/category/gamingdesktop" exact component={GamingDesktop}></Route>
                    <Route path="/category/gaminglaptop" exact component={GamingLaptop}></Route>
                    <Route path="/category/homeoffice" exact component={HomeOffice}></Route>
                    <Route path="/recommendation" exact component={RecommendationPage}></Route>
                    <Route exact path="/survey" render={props => (
                        <React.Fragment>
                            <Navbar></Navbar>
                            <div id="survey">
                                <div id="survey-page-title-layout">
                                    <h1 id="survey-page-title">Survey</h1>
                                </div>
                                <div id="survey-page-content-layout">
                                    <div className="container">
                                        <Questions />
                                    </div>
                                </div>
                            </div>
                            
                        </React.Fragment>
                        )} />
                </Router>
            </div>
        )
    }
}

const descStyle = {
    color: "cyan",
    textDecoration: "underline",
  };
  
function loggedIn(name){
    this.setState({user: name});
    this.setState({isLogin: true});
}

export default App