import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteBtnClick = (idUser) => {
        //console.log(idUser)
        this.props.deleteUser(idUser);
    }   

    //Ánh xạ dữ liệu ra ngoài bảng: mapping = forEach
    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
        <TableDataRow userName={value.name} key = {key} stt={key+1} 
                      id = {value.id}
                      tel={value.tel} permission={value.permission}
                      editFuncClick={ (user) => this.props.editFunction(value)}
                      changeEditUserStatus= {() => {this.props.changeEditUserStatus()}}
                      deleteBtnClick = {(idUser) => this.deleteBtnClick(idUser)}/>
    ))
    

    render() {
        // console.log(this.props.dataUserProps)
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <td>STT</td>
                            <td>Tên</td>
                            <td>Điện thoại</td>
                            <td>Quyền</td>
                            <td>Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                       {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
            /* End col-9 */ 
        );
    }
}

export default TableData;