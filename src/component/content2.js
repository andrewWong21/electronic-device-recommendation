import React from 'react'
import '../style/content2.css'
import businessLaptop from '../data/BusinessLaptop.json'
import gaminglaptop from '../data/GamingLaptop.json'
import homeoffice from '../data/HomeOffice.json'
import {Link} from 'react-router-dom'

class Content2 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list:businessLaptop,
            list2:gaminglaptop,
            list3:homeoffice
        }
    }

    render(){

        console.log(this.state.list)
        let listArr = [];
        let listArr2 = [];
        let listArr3 = [];
        for(let i=0; i<=7; i++){
            let item = (
                <tr>
                    <td width="35px" align="center"><img width="30px" src={this.state.list[i].Image}></img></td>
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
            listArr.push(item)
        }
        for(let i=0; i<=7; i++){
            let item = (
                <tr>
                    <td width="35px" align="center"><img width="30px" src={this.state.list[i].Image}></img></td>
                    <td>
                    <Link 
                        to={{pathname:"/item",
                        state:{
                            Title:this.state.list2[i].Title,
                            CPU:this.state.list2[i].CPU,
                            GPU:this.state.list2[i].Title,
                            Image:this.state.list2[i].Image,
                            Memory:this.state.list2[i].Memory,
                            Price:this.state.list2[i].Price,
                            Storage:this.state.list2[i].Storage,
                            URL:this.state.list2[i].URL,
                            Usage:this.state.list2[i].Usage,
                        }}} 
                        key={i}
                        >
                        {this.state.list2[i].Title}
                    </Link>   
                    </td>
                </tr>
                
            )
            listArr2.push(item)
        }
        for(let i=0; i<=7; i++){
            let item = (
                <tr>
                    <td width="35px" align="center"><img width="30px" src={this.state.list[i].Image}></img></td>
                    <td>
                    <Link 
                        to={{pathname:"/item",
                        state:{
                            Title:this.state.list3[i].Title,
                            CPU:this.state.list3[i].CPU,
                            GPU:this.state.list3[i].Title,
                            Image:this.state.list3[i].Image,
                            Memory:this.state.list3[i].Memory,
                            Price:this.state.list3[i].Price,
                            Storage:this.state.list3[i].Storage,
                            URL:this.state.list3[i].URL,
                            Usage:this.state.list3[i].Usage,
                        }}} 
                        key={i}
                        >
                        {this.state.list3[i].Title}
                    </Link>
                    </td>
                </tr>
                
            )
            listArr3.push(item)
        }
        return(

            <div id="content2">
                <div>
                    <h1 id="big-title">Know what you want</h1>
                </div>
                <div>
                    <p className="sub-title">we can help you to decide</p>
                </div>
                
                <div id="table-title-layout">
                    <div className="table-title"></div>
                    <div className="table-title"></div>
                    <div className="table-title"></div>
                </div>

                <div id="product-table-layout">
                    <table className="product-table">
                        <tbody>
                            {listArr}
                        </tbody>
                    </table>
                    <table className="product-table">
                        <tbody>
                            {listArr2}
                        </tbody>
                    </table>
                    <table className="product-table">
                        <tbody>
                            {listArr3}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default Content2;