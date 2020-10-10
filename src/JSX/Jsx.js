import React,{Component} from 'react';
const name='Thắng';

//Hàm map trong reactjs
const so = [1,2,3,4,5,6,7,8,9];
const so2 = so.map((x) => x+" ")
const so3 = so.map((x) => (
  <div>
    <li>Số : {x}</li>
  </div>
))
//HTML to JSX
class Jsx extends Component {
  render() {
    return (
      <div>
        <h1>Tôi tên là: {name}</h1>
        <h2>Cách sử dụng hàm map: {so2}</h2>
        <h3>Cách sử dụng hàm map với nhiều dòng lệnh: {so3}</h3>
      </div>
     )
  }
}




export default Jsx;
