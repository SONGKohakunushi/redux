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

	/* dispatch => ({
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}) */

	//mapDispatchToProps for short 
	// ===>
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)

