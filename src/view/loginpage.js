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
            username: '',
            password: ''
        }
    }

    render(){
        console.log(this.props)
        console.log(this.props.logn)
        console.log(this.props.usr)
        console.log("Username: " + this.props.usern)
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
                                <TextField
                                    id="standard-basic"
                                    label="Username"
                                    //value={this.state.username}
                                    type="text"
                                    fullWidth
                                    //onChange={this.handleChange}
                                />
                            </div>
                            <div className="login-text">
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    //value={this.state.password}
                                    type="password"
                                    autoComplete="current-password"
                                    fullWidth
                                    //onChange={this.handleChange}
                                /> 
                            </div>
                            <div id="login-page-button">
                                <Button
                                    onClick={this.loginEvent()}
                                    variant="outlined"
                                    type="submit"
                                    formAction="/"
                                >
                                    Login
                                </Button>
                            
                            
                            </div>
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
    auth.signOut().then(() => {
        this.setState({user: null});
    });
}
    
loginEvent(){
    auth.signInWithPopup(provider).then((result) => {
        const user = result.user;
        this.props.logIn(user);
    });
}

}

export default LoginPage