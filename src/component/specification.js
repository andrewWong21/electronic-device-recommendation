import React from 'react';
import '../style/spec.css'


class Specification extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div id="item-specification-layout">
                <table id="spec-table">
                    <tbody>
                        <tr>
                            <td className="spec-name">Title</td>
                            <td className="spec-content">{this.props.Title}</td>
                        </tr>
                        <tr>
                            <td className="spec-name">CPU</td>
                            <td className="spec-content">{this.props.CPU}</td>
                        </tr>
                        <tr>
                            <td className="spec-name">GPU</td>
                            <td className="spec-content">{this.props.GPU}</td>
                        </tr>
                        <tr>
                            <td className="spec-name">Memory</td>
                            <td className="spec-content">{this.props.Memory}</td>
                        </tr>
                        <tr>
                            <td className="spec-name">Storage</td>
                            <td className="spec-content">{this.props.Storage}</td>
                        </tr>
                        <tr>
                            <td className="spec-name">Type</td>
                            <td className="spec-content">{this.props.Type}</td>
                        </tr>
                        <tr>
                            <td className="spec-name">Usage</td>
                            <td className="spec-content">{this.props.Usage}</td>
                        </tr>
                        <tr>
                            <td className="spec-name">Price</td>
                            <td className="spec-content">{this.props.Price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Specification