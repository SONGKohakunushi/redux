import React, { Component } from 'react'
import {
	increment,
	decrement,
	incrementAsync
} from '../../redux/actions/count'

import {connect} from 'react-redux'

// UI component
class Count extends Component {

	increment = ()=>{
		const {value} = this.selectNumber
		this.props.increment(value*1)
	}
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.decrement(value*1)
	}
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.increment(value*1)
		}
	}
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.incrementAsync(value*1,500)
	}

	render() {
		return (
			<div>
				<h2>I am the Count component, the total:{this.props.personCount}</h2>
				<h4>sum：{this.props.count}</h4>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>+ If Odd</button>&nbsp;
				<button onClick={this.incrementAsync}>+ Async</button>&nbsp;
			</div>
		)
	}
}

export default connect(
	state => ({
		count:state.count,
		personCount:state.persons.length
	}),
	{increment,decrement,incrementAsync}
)(Count)

