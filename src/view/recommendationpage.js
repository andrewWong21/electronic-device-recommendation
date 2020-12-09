import React from 'react'
import '../style/recommendationpage.css'
import Navbar from '../component/navbar'
import {Link} from 'react-router-dom'

class RecommendationPage extends React.Component{
    render(){
        return(

            <div>
                <Navbar></Navbar>
                <div id="recommendation-page-layout">
                    <h1 id="recommendation-page-title">Recommendation</h1>
                    <div id="recommendation-page-content-layout">
                        <div id="recommendation-page-content">
                            <div className="recommendation-page-item">
                                <div className="recommendation-page-img"><img height="70px"></img></div>
                                <div className="recommendation-page-title"><Link></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default RecommendationPage