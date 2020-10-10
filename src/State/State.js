import React, { Component } from 'react';

class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai:true
        }
        this.changeStatus = this.changeStatus.bind();
    }
    handleevent1 = () => { console.log('Handle Event Button by Arrow function')}
    handleevent2 = () => { console.log('Syntax:{() => this.nameF()}')}
    //Arrow function: = () => {return ( code )} === = () => ( code ) 
    renderButton = () => (
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={() => this.handleevent1()}> Edit</div>
                    <div className="btn btn-success" onClick={() => this.handleevent2()}> Remove</div>
                </div>
            </div>
        
    )

    renderForm = () => (
        <div className="row">
            <div className="btn btn-group">
                <input defaultValue="Change Status State" type="text" name ="ten" className="form-control"/>
                <div className="btn btn-warning"> Remove</div>
            </div>
        </div>
    ) 
    displayCheck = () => {
        if(this.state.trangThai === true){
            return this.renderButton();    
        }
        else{
            return this.renderForm();
        }
    }
    //sst
    changeStatus = () => {
        this.setState({
            trangThai: !this.state.trangThai
        });
    } 
    render() {
        return (
            <div className="content">
                <button className="motnut" onClick={ () => {this.changeStatus()}}>Change Status</button>
                <h2>{this.displayCheck()}</h2>
            </div>
        );
    }
}

export default State;