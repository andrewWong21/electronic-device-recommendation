import React from 'react';
import ItemPreview from '../component/itempreview.js';
import Navbar from "../component/navbar.js";
import Coupon from '../component/coupon.js';
import Specification from '../component/specification'
import { Divider } from 'antd';
import Comment from '../component/comments'
import Description from '../component/description.js';
import CompareButton from '../component/comparebutton'
import data from '../data/data.json'
import '../style/item.css';

class Item extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        console.log(this.props)
        return(

            <div>
                <div>
                  <Navbar></Navbar>
                </div>
                
                <div className={'itembody'}>

                    <div className="image-section">
                        <ItemPreview Image={this.props.location.state.Image}></ItemPreview>
                    </div>

                    <div className="description-section">

                        <div className="item-title">
                            <h1 className="item-title-font">{this.props.location.state.Title}</h1>
                        </div>
                        <Divider orientation="left">Description</Divider>
                        <Description></Description>

                        <div className="compare-button">
                            <CompareButton></CompareButton>
                        </div>
                        

                    </div>
                </div>

                <div className="spec-and-coupon">

                    <div className="specification-layout">
                        <Divider orientation="left">Specification</Divider>
                        <Specification
                            Title={this.props.location.state.Title}
                            CPU={this.props.location.state.CPU}
                            GPU={this.props.location.state.GPU}
                            Memory={this.props.location.state.Memory}
                            Price={this.props.location.state.Price}
                            Storage={this.props.location.state.Storage}
                            Type={this.props.location.state.Type}
                            URL={this.props.location.state.URL}
                            Usage={this.props.location.state.Usage}
                        ></Specification>
                    </div>

                    <div className="coupon">
                        <Divider>Coupon</Divider>
                        <Coupon URL={this.props.location.state.URL}></Coupon>
                    </div>

                </div>

                <div id="comment-layout">
                    <div className="comment-and-feedback">
                        <Comment></Comment>
                    </div>
                </div>
                

            </div>
        )

    }
}

export default Item