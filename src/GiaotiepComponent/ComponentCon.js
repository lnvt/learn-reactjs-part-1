import React, { Component } from 'react';

class ComponentCon extends Component {

    constructor(props) {
        super(props);
        this.state={
            trangThai:false,
            textInput:'',
            dataObject:{
                id:1908,
                name:'FST'
            }
        }
    }
    //Nếu không setState thì dữ liệu input nhập vào là kiểu mảng Object    
    layDulieuInputText  = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value,
            textInput:value 
        });
        //console.log(value);
    }

    layDulieuTuState = (dulieuState) =>{
        dulieuState = this.state.trangThai;
    }

    render() {
        //console.log("Trạng thái State ở Component cha: "+this.props.ketnoiState)
        //console.log("Mảng dữ liệu là: "+this.state.dataObject.id);
        return (
            <div>
                 <h1>COMPONENT CON</h1>
                 <button onClick={() => {this.props.ketnoiProps()}} type="button" className="btn btn-primary">XEM DỮ LIỆU</button>
                 <hr/>
                 <div className="form-group">
                   <label>NHẬP DỮ LIỆU TRUYỀN VÀO</label>
                   <input onChange={(event) => {this.layDulieuInputText(event)}} type="text" />
                   <button onClick={(dulieu) => {this.props.nhanDulieu(this.state.textInput)}} type="button" className="btn btn-info">GỬI DỮ LIỆU TEXT</button>
                   <button onClick={(dulieuState) => {this.props.nhanDulieuState(this.state.trangThai)}} type="button" className="btn btn-success">GỬI DỮ LIỆU STATE</button>
                   <button onClick={(item) => {this.props.nhanDulieuStateArray(this.state.dataObject)}} type="button" className="btn btn-warning">GỬI DỮ LIỆU STATE ARRAY</button>
                 </div>
            </div>
        );
    }
}

export default ComponentCon;