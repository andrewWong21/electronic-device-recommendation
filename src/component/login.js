import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style/login.css'
import {Link} from 'react-router-dom'

class Login extends React.Component{

    constructor(props){
        super(props)
    }

    
    
    render(){
        
        console.log(this.props)
        return(
            <div className="login-layout">
                <div className="description-layout">
                    <h1 id="description">Electronic Device Recommendation</h1>
                    <Link id="description2" to="/loginpage">Login to get started</Link>
                    
                </div>
                  
                
            </div>
        )
    }

}

export default Login