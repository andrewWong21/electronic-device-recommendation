import React from 'react'
import '../style/content5.css'
import { Input } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

class Content5 extends React.Component{
    render(){
        return(
            <div id="content5">
                <div id="content5-title-layout">
                    <h1 id="content5-title">Search</h1>
                </div>
                <div id="search-item">
                <Search
                    size="large"
                    placeholder="what are you looking for?"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: 500, margin: '0 10px'}}
                />
                </div>
            </div>
        )
    }
}

export default Content5