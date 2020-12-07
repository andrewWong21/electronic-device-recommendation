import React from 'react';
import { Input } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);

class SearchBar extends React.Component{

    render(){
        return(
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch} // this is the function
                
                />
        )
    }
}

export default SearchBar