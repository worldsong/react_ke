import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import WheelDialog from './components/WheelDialog';

/**
 * 整个应用
 */
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.handleAddressSelect = this.handleAddressSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    /**
     * 城市选择回调，返回省市区的下标
     */
    handleAddressSelect(pIndex, cIndex, aIndex){
        var data = this.state.data;
        var address = data[pIndex].name
            + data[pIndex].city[cIndex].name
            + data[pIndex].city[cIndex].area[aIndex];
        console.log(" address:  --->" + address)
        this.address = address;  //与渲染无关的数据  直接存在this对象里  如果存在State里面会导致页面脏渲染，卡顿
    }
    handleClick() {
        var ans = '选择的地址：'+this.address;
        alert(ans);
    }
    componentDidMount(){
        axios.get("http://ac-wiuh7w1y.clouddn.com/c4acc5d3bec3fb3216fa.json")
            .then(res => {
                console.log(res.data)
                const data = res.data;
                this.setState({data})
            })
    }
    render() {
        return (
            <div>
                <div className="btn" onClick={this.handleClick}>点击获取城市</div>
                <WheelDialog
                    data={this.state.data}
                    onAddressSelect={this.handleAddressSelect}//传进回调
                />
            </div>
        );
    }
}
//todo <App/>是什么？
console.log(<App/>)

//todo 可以看出，<App />其实是js对象而不是真实的DOM，注意此时props是空对象。接下来，我们打印<App><div>这是App组件</div></App>，看看控制台会输出什么?
console.log(<App><div>这是App组件</div></App>)
