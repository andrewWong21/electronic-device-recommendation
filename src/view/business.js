import React from 'react'
import Navbar from '../component/navbar'
import '../style/category.css'
import {Link} from 'react-router-dom'
import data from '../data/BusinessLaptop.json'


class Business extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list:data
        }
    }
    render(){

        let element = null;
        let listArr = [];
        for(let i=0; i<this.state.list.length; i++){
            element = (
                <tr>
                    <td width="70px"><img width="50px" src={this.state.list[i].Image}></img></td>
                    <td>
                        <Link 
                            to={{pathname:"/item",
                            state:{
                                Title:this.state.list[i].Title,
                                CPU:this.state.list[i].CPU,
                                GPU:this.state.list[i].GPU,
                                Image:this.state.list[i].Image,
                                Memory:this.state.list[i].Memory,
                                Price:this.state.list[i].Price,
                                Storage:this.state.list[i].Storage,
                                URL:this.state.list[i].URL,
                                Usage:this.state.list[i].Usage,
                            }}} 
                            key={i}
                            >
                            {this.state.list[i].Title}
                        </Link> 
                    </td>
                </tr>
            )
            listArr.push(element)
        }
        return(
            <div>
                <Navbar></Navbar>
                <div className="category-page-title-layout">
                    <h1 className="category-page-title">Business Laptop</h1>
                </div>
                <div className="category-page-table-layout">
                    <table className="category-page-table">
                        <tbody>
                            {listArr}
                            <tr>
                                <td width="70px"><img></img></td>
                                <td><Link>Place holder</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Business