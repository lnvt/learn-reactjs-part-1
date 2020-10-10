import React, { Component } from 'react';
import '../css/cssroute.css';

import data from './dulieu.json';
import ProductRelated from './ProductRelated';
class DetailProduct extends Component {
    render() {
      var dem = 1;
      // console.log(this.props.match.params.id);
      // console.log(typeof(this.props.match.params.id));
      var detailproduct = parseInt(this.props.match.params.id)
      var appearance = data.map((value,key) => {
        if(value.id === detailproduct)
        {
          console.log(value.tieuDe);
          return(
          <div className="chitietsp" key={key}>
            {value.tieuDe}	
            <img src={value.anh} width="900px" height="600px" alt="Img"/>
            <p>{value.noiDung}</p>
          </div>
          )
        }
        return true;
      });
        return (
          <div className="detail">
            {appearance}
            {
              
              data.map((value,key) => {
                console.log(key)
                if(value.id !== detailproduct)
                {
                  if(dem <= 4 )
                    {
                      dem++;
                      return(
                        <ProductRelated 
                          key={key}
                          tinId= {value.id}
                          anh={value.anh} 
                          tieuDe={value.tieuDe}
                          trichDan={value.trichDan}/>
                      )
                    }
                }
                return true;
              })
            }

          </div>
        );
    }
}

export default DetailProduct;