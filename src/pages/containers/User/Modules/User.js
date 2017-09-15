import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/home';
import { connect } from 'react-redux';
class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                user
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
        actions: bindActionCreators(creators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);