## redux intro
1. https://redux.js.org/
2. http://www.redux.org.cn/
3. Github: https://github.com/reactjs/redux

* redux is a JS library to specifically do state management 
   * A component has state that needs to be readily available to other components - sharing
   * A component needs to change the state of another component - communication

**The notes will be based on a step-by-step rewriting a project from react to redux and contain many details and concepts **
        
### redux the three core concepts
#### action
1.	Object of the action, containing 2 attributes
    * type: identifier attribute, the value is a string
    * data: data attribute, the value is of any type 
	* example：{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }
2. reducer
    * initialize state, process state.
    * generate a new state based on the previous state and action when processing.
3. store
    * combine state、action、reducer 
    * get object
        * import {createStore} from 'redux'
        * import reducer from './reducers'
        * const store = createStore(reducer)
    * function
        * getState()
        * dispatch(action)
        * subscribe(listener)
## in the file note.md to record the process of coding and ideas
