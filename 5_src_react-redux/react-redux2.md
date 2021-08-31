### Count container
```
//a as function return state for passing UI component
function a(){
    return {count:900} 
}
//b as function return action for passing UI component
function b(){
    return {jia:()=>{console.log(1);}}
}
export default connect(a,b)(CountUI)
```

### UI component
```
render() {
        return (
			<div>
				<h1>count：{this.props.count}</h1>
```
### containers
```
//get state from redux 
function a(){
    return {count:store.getState()}
}
```

### containers-Count-index.jsx
```
function mapStateToProps(state){
	return {count:state}
}
function mapDispatchToProps(dispatch){
	return {
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}
}
//import action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

```

### UI component
```
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
```