import React from 'react';
import '../style/body.css';
import { Card, Col, Row } from 'antd';



class ContentList extends React.Component{
    // data needs to be an array:
    constructor(props){
        super(props)
        this.state={
            list:[
                {
                    "title":"a1"
                },
                {
                    "title":"a2"
                },
                {
                    "title":"a3"
                },
                {
                    "title":"a4"
                }
            ]
        }
    }
    
    render(){

        let array = this.state.list.map((item,index)=>{

            return(
                <div key={index} className="listcard">
                    <Card bordered={true} hoverable={true}>
                        {item.title}
                    </Card>
                </div>
            )
            
        })
        return(
            <div className="listbody">
                <div className={'cardlist'}>
                    {array}
                </div>
            </div>
            
            
        )
    }
}

export default ContentList