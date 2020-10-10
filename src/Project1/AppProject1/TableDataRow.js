import React, { Component } from 'react';

class TableDataRow extends Component {



    deleteBtnClick  = (idUser) => {
        this.props.deleteBtnClick(idUser);
    }
    permissionShow = () => {
        if(this.props.permission === 1){
            return "Admin";
        }
        else if(this.props.permission === 2){
            return "Moderator";
        } 
        else
            return "Normal";
    }
    editClick  = () => {
       this.props.editFuncClick();
       this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                <tr>
                    <td>{this.props.stt}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.tel}</td>
                    <td>
                        {this.permissionShow()}
                    </td>
                    <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua" 
                            onClick={() => this.editClick()}><i className="fa fa-edit" />Sửa</div>
                            <div className="btn btn-danger sua"
                            onClick={(idUser)=>this.deleteBtnClick(this.props.id)}><i className="fa fa-trash" /> Xoá</div>
                        </div>
                    </td>
                    <td />
                </tr>
                <tr>
                    <td />
                    <td />
                    <td />
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default TableDataRow;