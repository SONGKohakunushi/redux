## Async action 
        Async action  function() 
        Sync action   Object{} 

	```
    	incrementAsync = ()=>{
	    	const {value} = this.selectNumber
		    store.dispatch(createIncrementAsyncAction(value*1,500))
	    }
	```
	instead of 
	
	```
		//in count component, we define a function that use setTimeout to realize it 
	    incrementAsync = ()=>{
		    const {value} = this.selectNumber
		    setTimeout(()=>{
			    store.dispatch(createIncrementAction(value*1))
		    },500)
	    }
	```

# count_action.js
```
import store from '/.store'
export const createIncrementAsyncAction = (data,time) => {
    <!-- return is a function, because the function can open async tasks inside -->
	return ()=>{
		setTimeout(()=>{
			store.dispatch(createIncrementAction(data))
		},time)
	}
} 
```
===> 
```
//dont need to import store, we can use return (dispatch)
export const createIncrementAsyncAction = (data,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createIncrementAction(data))
		},time)
	}
}
```

#### Error:Actions must be plain objects.use custom middleware for async actions

### store.js   
#### install middleware  yarn add redux-thunk
```
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
export default createStore(countReducer,applyMiddleware(thunk))
```


		 			


