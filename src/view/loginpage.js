import React from 'react'
import { Divider } from 'antd';
import {auth, provider} from '../firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style/loginpage.css'

class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
        //loginEvent = this.loginEvent.bind(this);
        //logoutEvent = this.logoutEvent.bind(this);
    } 

    render(){
        return(
            <div id="login-page-layout">
                <div id="login-content">
                    <div id="login-content-title">
                        <h1>Login</h1>
                    </div>
                    <Divider></Divider>
                    <div>
                    
                        <form>
                            <div className="login-text">
                                <TextField id="standard-basic" label="Username" type="text" fullWidth/>
                            </div>
                            <div className="login-text">
                                <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                /> 
                            </div>
                            <div id="login-page-button"><Button onClick={this.loginEvent} variant="outlined" type="submit" formaction="/">Login</Button></div>
                        </form>
                    
                    </div>

                    <div id="ask-for-register">
                        <div>
                            <a href="/registerpage">Don't have an account? Click to register</a>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
    
    logoutEvent(){
      auth.signOut()
        .then(() => {
            this.setState({user: null});
        });
    }
    
    loginEvent(){
      auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          this.setState({ user: 'test'});
          //this.props.setState({ isLogin: !isLogin});
        });
    }
}

export default LoginPage