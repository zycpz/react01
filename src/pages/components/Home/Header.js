import React, { Component } from 'react';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/home'
console.log(API_ROOT,77)
class Header extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleReduce = this.handleReduce.bind(this);
    }
    handleAdd() {
        let url = types.HOME_COUNT_ADD
        this.props.actions.request(url);
    }
    createXmlHttp() {
        let xmlHttp;
        try { // Firefox, Opera 8.0+, Safari  
            xmlHttp = new XMLHttpRequest();
        }
        catch (e) {
            try {// Internet Explorer  
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) { }
            }
        }
        return xmlHttp;
    }
    showDetail() {
        // 1.创建异步对象  
        let xhr = this.createXmlHttp();
        xhr.onreadystatechange =  () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = new Function("return" + xhr.responseText)()//反序列化
                let url = types.HOME_COUNT_ADD
               
            }
        }
        xhr.open("GET", API_ROOT[`HOME_COUNT_ADD`], true);
        const processRequest = (data) => {
            alert(data);
        }
        // 4.发送  
        xhr.send(null);
    }
    handleReduce() {
        this.props.actions.countReduce();
    }
    render() {
        return (
            <div>
                <span onClick={this.handleAdd}>+</span>
                当前数字{this.props.home.count}
                <span onClick={this.handleReduce}>-</span>
            </div>
        )
    }

}
export default Header;