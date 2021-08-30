## redux Complete version
### count_action.js
      
        function createIncrementAction(data){
            return {type:'increment',data}
        }      
        ==> 
        const createIncrementAction =(data)=>{
            return {type:'increment',data}
        }
        ==>
        export const createIncrementAction = data =>({type:'increment',data})

### 在 index.jsx 
        import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
         
        increment = ()=>{
		    const {value} = this.selectNumber
            // store.dispatch({type:'increment',data:value*1})
		    store.dispatch(createIncrementAction(value*1))
	    }

### constant.js  
**This module is used to define the constant values of type in the action object**
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

# count_reducer.js
import {INCREMENT,DECREMENT} from './constant'
    switch(type){
        case INCREMENT:
            return preState + data
    }

# count_action.js
import {INCREMENT,DECREMENT} from './constant'        
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
