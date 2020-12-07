import React from 'react';
import '../style/item.css'
import {CheckOutlined} from '@ant-design/icons';

class Description extends React.Component{

    render(){
        return(
            <div className="item-description">
                <table>
                    <tr>
                        <td width="50px" align="center">
                            <CheckOutlined />
                        </td>
                        <td>Reasonable price</td>
                    </tr>
                    <tr>
                        <td width="50px" align="center">
                            <CheckOutlined />  
                        </td>
                        <td>Good machine</td>
                    </tr>
                    <tr>
                        <td width="50px" align="center">
                            <CheckOutlined />  
                        </td>
                        <td>Well designed</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Description