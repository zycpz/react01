import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/home';
import { connect } from 'react-redux'; 
console.log(creators,44)
//业务组件
import Header from "../../../components/Home/Header";

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { home, actions, dispatch } = this.props;
        return (
            <div>
                <Header home={home} actions={actions} dispatch={dispatch}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        home: state.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(creators, dispatch),
        dispatch   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);