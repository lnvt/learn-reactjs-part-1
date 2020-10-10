import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj:{}
        }
    }
    getUserEditedInfo  = (info) => {
        this.setState({
            userObj:info
        });
        //console.log(info)
        this.props.getUserEditedInfoForApp(info);
    }

    //State truyền qua từ Comp bố sang con không có arf
    isShowEdit  = () => {
        if(this.props.editUserStatus === true){
            return  <EditUser 
                        getUserEditedInfo = {(info) => this.getUserEditedInfo(info)}
                        changeEditUserStatus ={() => this.props.changeEditUserStatus()}
                        userEditObject={this.props.userEditObject}/>
        }
    }
    isChange = (event) => {
        //console.log(event.target.value)
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    nutHienthiForm = () => {
        if (this.props.hienthiForm === true) {
            return <div className="btn btn-outline-danger ml-2" onClick={() => this.props.ketNoi()}>Đóng lại</div>
        }
        else {
            return <div className="btn btn-outline-success ml-2" onClick={() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
    render() {
        //console.log(this.props.hienthiForm)
        //console.log(this.props.editUserStatus)
        return (
            <div className="col-12">
                {this.isShowEdit()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" placeholder="Nhập tên cần tìm" onChange={(event) => this.isChange(event)} />
                        <div className="btn btn-info" onClick={(dulieu) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                        {this.nutHienthiForm()}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;