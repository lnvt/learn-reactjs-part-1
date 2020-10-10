import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id :this.props.userEditObject.id,
            name :this.props.userEditObject.name,
            tel :this.props.userEditObject.tel,
            permission :this.props.userEditObject.permission
        }
    }
    
    //Truyền 1 mảng từ Comp ngược lên lại Comp cha
    //Bước 1: viết func tạo name & value
    //Bước 2: tạo state lưu giá trị
    //Bước 3: setState [name]:value 
    //Bước 4: Đặt hàm isChange vào các input(onChange)
    //Bước 5: Gửi lại lên component cha = tham số event.. gửi từng 1 Comp
    //Bước 6: Viết hàm truyền tham số Obj lên Comp cha
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButton  = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        //console.log('info in EditUser là : '+info.name)
        this.props.getUserEditedInfo(info);
        this.props.changeEditUserStatus();// trạng thái form
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 ">
                    <form>
                        <div className="card text-left mt-2">
                            <div className="card bg-warning">
                                <div className="card-header text-center">Sửa thông tin User</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <input onChange = {(event) => this.isChange(event)}defaultValue ={this.props.userEditObject.name}
                                        type="text" name="name" className="form-control" placeholder="Tên user" />
                                    </div>
                                    <div className="form-group">
                                        <input  onChange = {(event) => this.isChange(event)}defaultValue ={this.props.userEditObject.tel} 
                                        type="text" name="tel" className="form-control" placeholder="Điện thoại" />
                                    </div>
                                    <div className="form-group">
                                        <select onChange = {(event) => this.isChange(event)} defaultValue ={this.props.userEditObject.permission} 
                                        className="custom-select" name="permission" required="permission">
                                            <option value>Chọn quyền mặc định</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="button" className="btn btn-block btn-danger"
                                            value="Lưu thông tin" 
                                            onClick={() => {this.saveButton()}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;