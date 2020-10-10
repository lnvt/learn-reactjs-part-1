import React,{Component} from 'react';
import LifeCyclePROPS from'./LifeCyclePROPS';
class Ref extends Component {
    //con
    constructor(props){
        super(props);
        this.state={
            trangThai: "khoitao",
            trangThai2: "khoitao2"
        }
    }
    componentWillMount() {
        console.log("componentWillMoun!");
    }
    componentDidMount() {
        console.log("componentDidMount!")
    }
    // //scu
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate!")
        return true;
    }
    //cwup
    componentWillUpdate(nextProps, nextState) {
        console.log(" componentWillUpdate!")
    }
    //cdup
    componentDidUpdate(prevProps, prevState) {
        console.log(" componentDidUpdate!")
    }
    capnhapState  = ()  => {
        this.setState({
            trangThai:"trang thai dc update",
            trangThai2:"capnhat2"
        });
    }
    render() {
        //File -> Preference -> User Snippet -> Javascript -> ...
        //console.log('Ham render!');
        console.log(this.state.trangThai)
        return (
            <div>
                <LifeCyclePROPS ten={this.state.trangThai2}/>
                <button onClick={() => this.capnhapState()} className="btn btn-success">Click de update State</button>
            </div>
        );
    }
}
export default Ref;
