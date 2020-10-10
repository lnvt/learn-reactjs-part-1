import React, { Component } from 'react';
import '../css/cssroute.css';
import NewsItem from './NewsItem';
import data from './dulieu.json';
class Product extends Component {
    render() {
      // var so=[1,3,5,7,9];
      // var so2 = so.map( (value,key) => value*3 );
      // console.log(so2);
       return (
         <div className="content">
           {
              data.map((value,key) => {
              return(
                <NewsItem 
                    key={key}
                    tinId= {value.id}
                    anh={value.anh} 
                    tieuDe={value.tieuDe}
                    trichDan={value.trichDan}/>
              )   
              })
           }
         </div>
        );
    }
}

export default Product;