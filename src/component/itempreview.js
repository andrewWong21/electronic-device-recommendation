import React from 'react';
import '../style/item.css'
import { AutoComplete, Image } from 'antd';
import '../image/iphone-12-pro-family-hero.jpg'

function ImageDemo(props) {
    return (
      <Image
        width={AutoComplete}
        height={470}
        src={props.Image}
      />
    );
}

class ItemPreview extends React.Component{
  constructor(props){
    super(props)
  }
    render(){

      console.log(this.props.Image)
        return(
                <ImageDemo Image={this.props.Image}></ImageDemo>
        )
    }
}

export default ItemPreview