import React, { Component } from 'react';

class Handleevent extends Component {
    thongbao = () =>{alert('Cách sử dụng Handle Event ở button')}
    thongbao2 = () => {console.log('Cách sử dụng Handle Event ở button')}
    thongbao3 = (x) => {alert(x)}
    render() {
        return (
        <div>
            <h2>CÁCH SỬ DỤNG HANDLE EVENT</h2>
            <div className="row">
                    <div className="btn btn-group" >
                    <div className="btn btn-danger" onClick={this.thongbao}>Alert</div>   
                    <div className="btn btn-success" onClick={this.thongbao2}>Console</div>  
                    <div className="btn btn-primary"  onClick={() => this.thongbao3("HandleEvent ArrowFunction")}>
                        Truyền tham số vào btn bằng arrow function
                    </div>
                    <div className="btn btn-warning" onClick={this.thongbao3.bind(this,"HandleEvent bind.this")}>
                        Truyền tham số vào btn bằng bind
                    </div>    
                </div>
            </div>
        </div>
        );
    }
}


export default Handleevent;