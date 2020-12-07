import React from 'react';
import '../style/navbar.css';
import {SearchOutlined,UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={'navbar'}>

                <Link className="a1" to="/">Electronic Recommendation</Link>
                <a className="a1" href="#content3">Category</a>
                <a className="a1" href="#content4">Compare</a>
                
                <div className="nav-right">
                    <a className="nav-icon" href="#content5">
                        <SearchOutlined style={{ fontSize: '16px', color: 'black' }}></SearchOutlined>
                    </a>
                    <a className="nav-icon">
                        <UserOutlined style={{ fontSize: '16px', color: 'black' }}/>
                    </a>
                    
                </div>
                
            </div>
        )
    }
}

export default Navbar