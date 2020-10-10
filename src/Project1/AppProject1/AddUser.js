import React, { Component } from 'react';

class AppUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }
    //arf
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
        });

        //pakage data in state to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        //console.log(item);  
    }



    kiemTraTrangThai = () => {
        if (this.props.hienthiForm === true) {
            return (
                <div className="col">
                    <form>
                    <div className="card text-left mt-2">
                        <div className="card border-primary">
                            <div className="card-header"> Thêm mới User vào hệ thống</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" onChange={(event) => this.isChange(event)} name="permission" required="permission">
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary"
                                        onClick={(name, tel, permission) =>
                                            this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        //console.log(this.props.hienthiForm); 
        //console.log(this.state);
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
            /* End col-3 */

        );
    }
}

export default AppUser;