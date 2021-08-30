## redux simplify version
### Action Creatores has been omitted, we use Store and Reducers

* create folder Reudx 
* two files store.js and count_reducer.js
* install Redux yarn add redux

### store.js
```
import {createStore} from 'redux'
import countReducer from './count_reducer'
export default createStore(countReducer)
```

### index.js 
```
import store from './redux/store'
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})
```
### count_reducer.js   
1. This file is used to create a Reducer for the Count component, which is essentially a function
2. The Reducer function receives two parameters: the previous state (preState) and the action object (action)
			```
			//Initialization status
            const initState = 0 
            export default function countReducer(preState=initState,action){
                const {type,data} = action
	            switch (type) {
		            case 'increment': 
			            return preState + data
		            case 'decrement': 
		                return preState - data
	                default:
		                return preState
                }
            }
			```

* The state (count) is passed in redux
* in component dont need to store state, Just delete state = {count:0}

### Count component
import store from '../../redux/store'
// need to use store.dispatch pass action (type,value) to reducer
this.setState({count:count-value*1})
==>   store.dispatch({type:'increment',data:value*1})
{this.state.count}    ==> {store.getState()}		


//  the state is changed with the help of redux, but redux doesn't change the page 
	call .render() to update state
    ```
		componentDidMount(){
		    store.subscribe(()=>{
			    this.setState({})
		    })
	} 
	```
// instead of componentDidMount, we can subscribe redux and call render() index.js
	```
	import store from './redux/store'
	store.subscribe(()=>{
		ReactDOM.render(<App/>,document.getElementById('root'))
	})
	```
     
## redux simplify version
* delete state in Count component 
* src:
	redux
	store.js
	count_reducer.js
* store.js：
* count_reducer.js：
* index.js subscribe store, because redux is only responsible for managing state

