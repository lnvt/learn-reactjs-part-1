import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

function Cachso1Components(){
    return( 
    <div>
      Đây là cách số 1 truyền function bình thường
      </div>
      )
  }

var Cach2 = function(){
  return( 
    <div>
      <h3>Đây là cách số 2 truyền function bằng anonymous </h3>
      </div>
    )
}

var Cach3 = () => (
    <div>
    <h1>Đây là cách số 3 truyền function bằng arrow function </h1>
    </div> 
)

//rjc
class Cach4 extends Component {
  render() {
    return (
      <div>
        <i>Đây là cách số 4 truyền bằng class</i>
      </div>
    );
  }
}


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //     </a>
    //   </header>
    // </div>
    <div>
          <Cachso1Components/>
          <Cach2/>
          <Cach3/>
          <Cach4/>
          <hr/>
          <div class="container">
            <div class="row">
              <Props1 tieude="Cách sử dụng Props: thay đổi giá trị cho từng components" linkanh='https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg'/>
              <Props1 tieude="Bằng cách truyền trong component" linkanh='https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg'/>
              <Props1 tieude="Rồi khai thác trong app, ghi tên cho đúng và truyền nội dung" linkanh='https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2019/11/08/source-img/20191108175625_65552.jpg_500x500.jpg'/>
            </div>
          </div>
          <hr/>
          <Props2 tieude="Cách 2: Truyền PROPS bằng class" linkanh='https://besthqwallpapers.com/Uploads/20-3-2020/125657/thumb2-violet-liquid-background-4k-liquid-textures-waves-textures-wavy-backgrounds.jpg'/>
    </div>
  );
}
//Cách 1: Sử dụng props
function Props1(props){
  return (
    <div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          	<div className="thumbnail">
          		<div className="caption">
                  <h3>{props.tieude}</h3>
                  <img src={props.linkanh} className="img-responsive" />
          			<p>
          				<button className="btn btn-primary">PROPS </button	>
          			</p>
          		</div>
          	</div>
          </div>
      </div>
  )
}


//Cách 2: sử dụng class để định nghĩa và thao tác props
class Props2 extends Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        	<div className="thumbnail">
          		<div className="caption">
                  <h3>{this.props.tieude}</h3>
                  <img src={this.props.linkanh} className="img-responsive"/>
          			<p>
          				<button className="btn btn-primary">PROPS </button	>
          			</p>
          		</div>
          	</div>
      </div>
    );
  }
}
//defaultValue ={this.props.tieude} : Lay name cua props gan vao input
export default Cachso1Components;

