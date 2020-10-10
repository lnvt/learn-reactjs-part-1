import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';


class AppProject1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hienthiForm: false,
            data: [], // Chèn data.json trong this.state
            searchText: "",
            editUserStatus: false,
            userEditObject: {}
        }
    }



    componentWillMount() {

        //Kiểm tra xem có localStorage hay chưa?
        console.log(localStorage.getItem('userData2'))

        if (localStorage.getItem('userData2') == null) {
            localStorage.setItem('userData2', JSON.stringify(DataUser));
        }
        else {
            var temp = JSON.parse(localStorage.getItem('userData2'));
            this.setState({
                data: temp
            });
        }
    }

    //Xoá người dùng:

    deleteUser = (idUser) => {
        //console.log(idUser);

        //ham filter:
        // var arr = [1,2,3];
        // var x = 2;
        // arr = arr.filter(item => item != x);
        // console.log(arr);


        var tempData = this.state.data.filter(item => item.id !== idUser);
        //console.log(tempData);
        // tempData.forEach((value,key) => {
        //     if(value.id === idUser){
        //         console.log(key);
        //     }
        // })
        this.setState({
            data: tempData
        });

        //Đẩy vào dữ liệu
        localStorage.setItem('userData2', JSON.stringify(tempData));
    }

    //Cập nhật info đã chỉnh sửa:
    getUserEditedInfoForApp = (info) => {
        //console.log('Thông tin đã sửa xong là: '+info.name);
        this.state.data.forEach((value, key) => {
            if (value.id === info.id) {
                value.name = info.name;
                value.tel = info.tel;
                value.permission = info.permission;
            }
        })
        localStorage.setItem('userData2', JSON.stringify(this.state.data));
    }
    changeEditUserStatus = () => {
        this.setState({
            editUserStatus: !this.state.editUserStatus
        });
    }
    editUser = (user) => {
        //console.log('Ket noi duoc roi!')
        this.setState({
            userEditObject: user
        });
        console.log(user)
    }
    getNewUserData = (name, tel, permission) => {
        var item = {};
        item.id = uuidv1(); // Phát sinh ngẫu nhiên ID: https://www.npmjs.com/package/uuid 
        item.name = name;
        item.tel = tel;
        item.permission = permission;

        //push dữ liệu lên mảng:
        var items = this.state.data;
        items.push(item);
        this.setState({
            data: items
        });

        // console.log(name);
        // console.log(tel);
        // console.log(permission);

        //console.log(this.state.data)
        localStorage.setItem('userData2',JSON.stringify(items));
    }
    getTextSearch = (dulieu) => {
        this.setState({
            searchText: dulieu
        });
        //console.log("Dữ liệu bố nhận được từ Component con là: "+this.state.searchText);
    }
    doiTrangThai = () => {
        this.setState({
            hienthiForm: !this.state.hienthiForm
        });
    }
    thongBao = () => {
        alert("Kết nối thành công");
    }
    render() {

        // localStorage:
        // localStorage.setItem("Khoá 1","Giá trị 1");
        // console.log(localStorage.getItem("Khoá 1"));
        // localStorage.removeItem('Khoá 1');

        // stringify: đổi mảng sang dạng chuỗi
        // localStorage.setItem("userData",JSON.stringify(DataUser));


        //Khai báo mảng:
        var ketqua = [];
        this.state.data.forEach((item) => {
            if (item.name.indexOf(this.state.searchText) !== -1) {
                ketqua.push(item);
            }
        })
        //console.log(ketqua)
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container-fluid">
                        <div className="row">
                            {/* State truyền xuống không có arf */}
                            <Search ketNoi={() => this.doiTrangThai()}
                                hienthiForm={this.state.hienthiForm}
                                checkConnectProps={(dulieu) => this.getTextSearch(dulieu)}
                                editUserStatus={this.state.editUserStatus}
                                changeEditUserStatus={() => { this.changeEditUserStatus() }}
                                userEditObject={this.state.userEditObject}
                                getUserEditedInfoForApp={(info) => { this.getUserEditedInfoForApp(info) }} />

                            <TableData dataUserProps={ketqua}
                                editFunction={(user) => this.editUser(user)}
                                changeEditUserStatus={() => { this.changeEditUserStatus() }}
                                deleteUser={(idUser) => { this.deleteUser(idUser) }} />

                            <AddUser
                                hienthiForm={this.state.hienthiForm}
                                add={(name, tel, permission) => this.getNewUserData(name, tel, permission)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppProject1;