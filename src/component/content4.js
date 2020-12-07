import React from 'react';
import "../style/content4.css"
import {CheckOutlined} from '@ant-design/icons';
import data from '../data/data.json'

class Content4 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list:data
        }
    }
    render(){
        return(

            <div id="content4">
                <div id="content4-title-layout">
                    <h1 id="compare-title">Compare</h1>
                    <div id="compare-layout">
                        <div className="compare-content">
                            <div className="compare-item">
                                <div className="compare-item-title-layout">
                                    <span className="compare-item-title">{this.state.list[5].Title}</span>
                                </div>

                                <div className="compare-table-layout">
                                    <table className="compare-table">
                                        <tbody>
                                            <tr>
                                                <td width="50px" height="30px"align="center">
                                                    <CheckOutlined />
                                                </td>
                                                <td align="left">{this.state.list[5].CPU}</td>
                                            </tr>
                                            <tr>
                                                <td width="50px" height="30px"align="center">
                                                    <CheckOutlined />
                                                </td>
                                                <td align="left">{this.state.list[5].GPU}</td>
                                            </tr>
                                            <tr>
                                                <td width="50px" height="30px"align="center">
                                                    <CheckOutlined />
                                                </td>
                                                <td align="left">{this.state.list[5].Memory}</td>
                                            </tr>
                                            <tr>
                                                <td width="50px" height="30px"align="center">
                                                    <CheckOutlined />
                                                </td>
                                                <td align="left">{this.state.list[5].Storage}</td>
                                            </tr>
                                            <tr>
                                                <td width="50px" height="30px"align="center">
                                                    <CheckOutlined />
                                                </td>
                                                <td align="left">{this.state.list[5].Type}</td>
                                            </tr>
                                            <tr>
                                                <td width="50px" height="30px"align="center">
                                                    <CheckOutlined />
                                                </td>
                                                <td align="left">{this.state.list[5].Price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="compare-item">
                                <div className="compare-item-title-layout">
                                    <span className="compare-item-title">{this.state.list[35].Title}</span>
                                </div>

                                <div className="compare-table-layout">
                                    <table className="compare-table">
                                        <tbody>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[35].CPU}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[35].GPU}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[35].Memory}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[35].Storage}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[35].Type}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[35].Price}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div className="compare-content">
                            <div className="compare-item">
                                <div className="compare-item-title-layout">
                                    <span className="compare-item-title">{this.state.list[45].Title}</span>
                                </div>

                                <div className="compare-table-layout">
                                    <table className="compare-table">
                                        <tbody>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[45].CPU}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[45].GPU}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[45].Memory}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[45].Storage}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[45].Type}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[45].Price}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="compare-item">
                                <div className="compare-item-title-layout">
                                    <span className="compare-item-title">{this.state.list[55].Title}</span>
                                </div>

                                <div className="compare-table-layout">
                                    <table className="compare-table">
                                        <tbody>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[55].CPU}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[55].GPU}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[55].Memory}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[55].Storage}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[55].Type}</td>
                                        </tr>
                                        <tr>
                                            <td width="50px" height="30px"align="center">
                                                <CheckOutlined />
                                            </td>
                                            <td align="left">{this.state.list[55].Price}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Content4