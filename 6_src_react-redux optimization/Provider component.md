### provider

### index.js
```
import store from './redux/store'
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})
```
* With react-redux it works without detection
* All the logic in the connect()() call
* The container component already has the ability to detect state changes in redux by default
* So now we remove store.subscribe and  import store from '. /redux/store'

* the container component how to get store
* App.jsx pass store to the container  by <Count store={store}/>
* If now there are more components inside the App than just containers <Demo store={store}/> 
...... Many components to pass to store
* If each demo component is a container component, you need to pass the store into it one by one
* So you can find the upper level of the App.jsx entry file index.js and pass the store into it

### index.js
```
import store from './redux/store'
import {Provider} from 'react-redux'
// The Provider gets the store and automatically analyzes all the container components in the application and passes the store to each container component
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)
```