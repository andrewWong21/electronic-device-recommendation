import React from 'react';
import { Card } from 'antd';
import '../style/item.css';
import data from '../data/Coupon.json'

class Coupon extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list : data
        }
    }
    render(){
        let element = null
        let listArr = []
        for(let i=0; i<this.state.list.length; i++){
            element = (
                <ul>
                    <li className="coupon-list">{this.state.list[i]["Coupon Code"]}</li>
                </ul>
            )
            listArr.push(element)
        }
        return(
            <div className="coupon-display">
                    <table width="100%">
                        <Card title={<a href={this.props.URL}>Neweggs</a>} bordered={true}>
                            {listArr}
                        </Card>
                    </table>
            </div>
        )
    }
}

export default Coupon