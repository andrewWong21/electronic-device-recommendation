import React from 'react';
import Navbar from "../component/navbar.js"
import Login from "../component/login.js"
import Recommendation from "../component/recommendation"
import Content from "../component/content.js"
import Content2 from "../component/content2.js"
import Content3 from "../component/content3"
import Content4 from "../component/content4"
import Content5 from "../component/content5"
import '../style/body.css'

class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isLogin:false
    }
  }

  render(){

    console.log(this.props)
    let element = null;
    
    if(this.state.isLogin){
      element=<Recommendation></Recommendation>
    }else{
      element=<Login></Login>
    }
    
    return(
      <div className="main-page">
        <Navbar></Navbar>
        {element}
        <Content></Content>
        <Content2></Content2>
        <Content3></Content3>
        <Content4></Content4>
        <Content5></Content5>
      </div>
    )
  }
}

export default Main