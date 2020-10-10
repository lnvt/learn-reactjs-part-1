import React, { Component } from 'react';
import '../css/cssroute.css';
import { Redirect } from 'react-router-dom';
class Contact extends Component {
    constructor(props) {
      super(props);
      this.state ={
        isRedirect : false,
        fNgay: "Mon"
      }
    }
    isChange = (event) =>{
      const ten = event.target.name;
      const giatri = event.target.value;
      //console.log(ten +" "+giatri);
      this.setState({
        [ten]: giatri
      });
    }
    submitForm = (event) => {
      event.preventDefault();
        this.setState({
            isRedirect:true
        });
    }
    isFileChange = (event) =>{
      //const fImg = event.target.files[0];
      const tenAnh = event.target.files[0].name;
      this.setState({
        fAnh: tenAnh
      });
    }
    getGiatri = () => {
      var noiDung = "";
      noiDung+= "Ten nhan duoc la: "+this.state.fName;
      noiDung+= " Dia chi nhan duoc la: "+this.state.fAddr;
      noiDung+= " Email nhan duoc la: "+this.state.fEmail;
      noiDung+= " Ngay nhan duoc la: "+this.state.fDate;
      noiDung+= " Anh nhan duoc la: "+this.state.fAnh;
      return noiDung;
    }

    render() {
      if(this.state.isRedirect){
        console.log(this.getGiatri());
        return <Redirect to="/trangchu" /> 
      }
        return (
            <div>
  <h2 className="tieude">LIÊN HỆ VỚI CHÚNG TÔI</h2>
  <div className="content">
    <form  className="frmlienhe">
      Họ tên: <input  onChange={(event) => this.isChange(event)} type="text" width={200} height={100}         name="fName"/> <br />
      Địa chỉ: <input onChange={(event) => this.isChange(event)} type="text" width={200} height={100} name="fAddr"/> <br />
      Email: <input  onChange={(event) => this.isChange(event)} type="text" width={200} height={100} name="fEmail"/> <br />
      Chọn ngày: 
      <select value={this.state.fNgay} name="fDate" className="form-control" onChange={(event) => this.isChange(event)}>
        <option value="Sun">Sun</option>
        <option value="Mon">Mon</option>
        <option value="Tue">Tue</option>
        <option value="Thurs">Thurs</option>
      </select>
      Chọn ảnh: 
      <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control" name="fImg"/>

      <input type="submit" defaultValue="Gửi" onClick={(event) => this.submitForm(event)}/>
    </form>
  </div>
</div>

        );
    }
}

export default Contact;