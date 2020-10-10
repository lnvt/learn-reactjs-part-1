import React,{Component} from 'react';

class LifeCyclePROPS extends Component {
    //cwr
    componentWillReceiveProps(nextProps) {
        console.log(" componentWillReceiveProps cua PROPS! "+nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate cua PROPS!")
        return true;
    }
    //cwup
    componentWillUpdate(nextProps, nextState) {
        console.log(" componentWillUpdate cua PROPS!")
    }
    //cdup
    componentDidUpdate(prevProps, prevState) {
        console.log(" componentDidUpdate cua PROPS!")
    }
    render() {
         console.log('Ham render cua PROPS!');
        return (
            <div>
                <h3>{this.props.ten}</h3>
            </div>
        );
    }
}
export default LifeCyclePROPS;
