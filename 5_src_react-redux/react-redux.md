### react-redux 
#### The react-redux model
    react-redux separates components into two categories, container components and UI components
    container components pass state to redux via stroe.dispatch(action)
    redux passes state via store.getState()
1. all UI components should be wrapped in a container component, they are parent and child
2. the container component is the one that actually deals with redux and can use redux api's as much as it wants
3. the UI component cannot use redux api's
4. the container component will pass to the UI component: (1). the state stored in redux (2). action for manipulating the state
5. Note: The container component passes to the UI component: state, action to manipulate state, all via props


#### UI component, which cannot contain any redux api
#### UI component is responsible for page rendering and binding user events
#### countUI component Remove redux api: action,reducer,store

#### container component containers install library yarn add react-redux
#### container component is a bridge, with UI components on the left side and redux on the right side
```
import CountUI from '../../components/Count'
import store from '../../redux/store'
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'
import {connect} from 'react-redux'
```
        
* connect()() is written in such a way that a container component can be connected on the left
* const CountContainer = connect()(CountUI) This container component is to be connected to the CountUI
* So inside () is CountUI Instead of associating the container component with redux
* first make the connection between the container component and the UI component on the left
* export default CountContainer

* export default connect()(CountUI)
* The container component is rendered inside the page, and since the UI component is a child of it, the UI component is also rendered

### App.jsx 
Instead of importing the UI component, App.jsx should import Count's container component

import Count from '. /containers/Count'

Error: Could not find "store"

### container 
import CountUI from '../../components/Count'

import store from '../../redux/store'

Error: Could not find "store"        

### App.jsx 
#### import store and pass to container
```
import Count from './containers/Count'
import store from './redux/store'
export default class App extends Component {
render() {
	return (
		<div>
			<Count store={store} />
		 </div>
        )
    }
}
```
**The store inside the container component cannot be imported by itself, it has to be passed as props in the upper level of App.jsx**