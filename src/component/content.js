import React from 'react';
import { Link } from 'react-router-dom';
import "../style/body.css";
import data from '../data/data.json'

class Content extends React.Component{

    constructor(props){
        super(props)
        this.state={
            list:data
        }
        
    }

    render(){
        let element=null;
        let listArr = []
        for(let i=0; i<13; i++){
            element=(
                <tr>
                    <td width="40px" align="center">{i}</td>
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
            <div className="content1">

                <div className="content1-left">
                    <h2 id="rank-title">Ranking</h2>
                    <div className="rank-table-layout">
                        <table className="rank-table">
                            <thead>
                            </thead>
                            <tbody>
                                {listArr}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="content1-right">
                    <h2 id="news-title">News</h2>

                    <div id="img1">
                        <a className="news-title">Apple fined $12M for unfair claims about iPhone water resistance</a>
                    </div>

                    <div id="img2">
                        <a className="news-title">26 Best Cyber Monday Laptop Deals: Deep Discounts On Models From Dell, HP, Apple, Samsung And More</a>
                    </div>
                    <div id="img3">
                        <a className="news-title">M1 Mac mini catapulted Apple to number one in Japanese desktop PC market</a>
                    </div>
                </div>
                
                

                
            </div>
        )
    }
}

export default Content