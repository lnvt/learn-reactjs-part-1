import React, { Component } from 'react';
import ComponentCon from './ComponentCon';

class ComponentCha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangThaiCompCha:true
        }
    }
    
    ketNoiCompCon  = () => {
        console.log('Kết nối thành công!');
    }
    nhanDulieuTuCompCon = (dulieu) => {
        console.log('Dữ liệu nhận được từ Component Con là: '+dulieu);
    }

    nhanDulieuStateTuCompCon  = (dulieuState) => {
        console.log('Dữ liệu nhận được từ Component Con là: '+dulieuState);
    }

    nhanDulieuStateArray  = (item) => {
        console.log(item);
    }
    render() {
        return (
            <div>
                <h1>COMPONENT CHA</h1>
                <hr/>
                <ComponentCon
                    ketnoiProps= { () => {this.ketNoiCompCon()}}
                    ketnoiState= {this.state.trangThaiCompCha}
                    nhanDulieu= {(dulieu) => this.nhanDulieuTuCompCon(dulieu)}
                    nhanDulieuState = {(dulieuState) => this.nhanDulieuStateTuCompCon(dulieuState)}
                    nhanDulieuStateArray = {(item) => this.nhanDulieuStateArray(item)}
                    />
            </div>
        );
    }
}

export default ComponentCha;