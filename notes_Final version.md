## this is final version,and avoid redundant and repeat content, if u want to check details of knowledge, u can look other part of files including every steps and knowledge 

# create count component
```js
import React, {Component} from 'react'
export default class Count extends Component{
    render(){
        return(
            <div>
                <h2> count is : ??? </h2>
            </div>
        )
    }
}
// we can use connect, delete export default class, then we can export default connect
import {connect} from 'react-redux'
class Count extends Component{
    render(){
        return(
            <div>
                <h2> count is : ??? </h2>
            </div>
        )
    }
}
// container component
export default connect(
    state => ({
        count: state.count
    })
    {}
)(Count)
// from now, we prepared the container component, we want to pass state in the UI component
<h2> count is : {this.props.count} </h2>
// create a button, hit this button, add one, binding a function
<button onClick={this.increment}> add one </button>
// create a function add
// and import action from redux
import {increment, decrement, incrementAsync} from '../../redux/actions/count'
increment = ()=>{
    // inform redux, we want to add one in the state,
    // we get the action from container component  mapDispatchToProps
    this.props.increment(value*1)
    // because the value is a string ,we want to convert to number so *1
} 
export default connect(
    state=>({
        state.count
    })
    {increment}
)
// the same way, we can create function decrement, incrementIfOdd,incrementAsync with the button
// and we can add to a <select> <option> </select> for selecting a number
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
// now, if we want display the state from another component 
export default connect(
	state => ({
		count:state.count,
		personCount:state.persons.length
	}),	{increment,decrement,incrementAsync}
)(Count)
// and display this state personCount in the UI component
<h2>I am the Count component, the total:{this.props.personCount}</h2>
```
> from now, we finished the count component
>
> the same way, we can create Person component
```js
import React, {Component} from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'
class Person extends Component{
    addPerson=()=>{
        const name= this.nameNode.value
        const age = this.ageNode.vallue*1
        const personObj = {id:nanoid(), name,age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render(){
        retirn(
            <div>
                <h2>im the person component,the total{this.props.count}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="name">
                <input ref={c=>this.ageNode= c} type="text" placeholder="age">
                <button onClick={this.addPerson}>add Person</button>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state=>({
        persons:state.persons,
        count:state.count
    }),
    {addPerson}
)(Person)
```
# create redux-actions 
```js
// action for count.js
import {INCREMENT,DECREMENT} from '../constant'


export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})

export const incrementAsync = (data,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment(data))
		},time)
	}
}

// action for person.js
import {ADD_PERSON} from '../constant'

export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})
```
# create redux-reducers
```js
//reducer for count.js
import {INCREMENT,DECREMENT} from '../constant'

const initState = 0 
export default function countReducer(preState=initState,action){
	const {type,data} = action

	switch (type) {
		case INCREMENT: 
			return preState + data
		case DECREMENT: 
			return preState - data
		default:
			return preState
	}
}
// reducer for person.js
import {ADD_PERSON} from '../constant'

const initState = [{id:'001',name:'tom',age:18}]

export default function personReducer(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case ADD_PERSON: 
			return [data,...preState]
		default:
			return preState
	}
}
```
> combine two reducer, its convinent to pass component together to store.js
>
> so create a file index.js
```js
import {combineReducers} from 'redux'
import count from './count'
import persons from './person'

export default combineReducers({
	count,
	persons
})
```
# store.js
```js
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
```
> we pass library store to the component in the index.js
>
> use  ```<Provider>```
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)
```