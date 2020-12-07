import React from 'react';
import '../style/content3.css'
import {Link} from 'react-router-dom'

class Content3 extends React.Component{

    render(){
        return(
            <div id="content3">
                <div id="category-title-layout">
                    <h1 id="category-title">Category</h1>
                </div>
                <div id="category-layout">
                    <div id="top-row">
                        <div id="category1"><Link className="category-name" to="/category/cellphone">Cell Phone</Link></div>
                        <div id="category2"><Link className="category-name" to="/category/gaminglaptop">Gaming Laptop</Link></div>
                        <div id="category3"><Link className="category-name" to="/category/gamingdesktop">Gaming Desktop</Link></div>
                        <div id="category4"><Link className="category-name" to="/category/business">Laptop</Link></div>
                    </div>
                    
                    
                    <div id="bottom-row">
                        <div id="category5"><Link className="category-name" to="/category/business">Latest</Link></div>
                        <div id="category6"><Link className="category-name" to="/category/business">Desktop</Link></div>
                        <div id="category7"><Link className="category-name" to="/category/homeoffice">Home/Office</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content3