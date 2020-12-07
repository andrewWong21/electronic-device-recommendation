import React from 'react'
import Navbar from '../component/navbar'
import '../style/category.css'
import {Link} from 'react-router-dom'
class Cellphone extends React.Component{

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div className="category-page-title-layout">
                    <h1 className="category-page-title">Cell Phone</h1>
                </div>
                <div className="category-page-table-layout">
                    <table className="category-page-table">
                        <tbody>
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

export default Cellphone