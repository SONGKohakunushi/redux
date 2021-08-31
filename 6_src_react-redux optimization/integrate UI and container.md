### integrate UI and container

#### containers - Count - index.jsx
* Put all the content of the UI component directly into the container
* remove the default exposure before the UI component
* make it class Count extends Component { because there can only be one default exposure
* bottom connect(Count) because the UI component is not CountUI, it's a Count component
```
import React, { Component } from 'react'
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'
import {connect} from 'react-redux'

class Count extends Component {

	increment = ()=>{
		const {value} = this.selectNumber
		this.props.jia(value*1)
	}
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.jian(value*1)
	}
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
	}
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.jiaAsync(value*1,500)
	}

	render() {
		return (
			<div>
				<h1>count：{this.props.count}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>+ if Odd</button>&nbsp;
				<button onClick={this.incrementAsync}>+ Async</button>&nbsp;
			</div>
		)
	}
}

export default connect(
	state => ({count:state}),
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)
```
* integrate UI component and container component
* index.js pass store to compoents by wrapping <Provider store={store}>
* dont need to subscribe state, because we use connect()()
* optimization mapDispatchToProps
* component want to combine with redux 
	1. define UI component, but not expose
	2. define container component use connect()()
		```
		connect(
				state => ({key:value}), //Mapping state, from redux映射状态，redux帮保存的状态
				{key:xxxxxAction} 		//Mapping action
		)(UIcomponent)
		```
	3. in UI component get and process state by this.props.xxxxxxx
		```
		this.props.jia(value*1)
        {this.props.count}
		```


