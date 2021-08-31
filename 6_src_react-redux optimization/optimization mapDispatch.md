### optimization mapDispatch

#### containers-Count-index.jsx
```
// Mapping Status
function mapStateToProps(state){
	return {count:state}
}
// Mapping action
function mapDispatchToProps(dispatch){
	return {
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)()
```

#### ===> optimization 
```
// Arrow functions
const mapStateToProps = state => ({count:state})

const mapDispatchToProps = dispatch =>(
    {
       	jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)), 
    }
)
export default connect(mapStateToProps,mapDispatchToProps)
```

#### ===> optimization 
```
export default connect(
    state => ({count:state}),
    dispatch =>({
        jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)), 
    })
)(CountUI)
```

#### optimization from API perspective
```
// from an api perspective, the second can be written as an object instead of a function
{  
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction,
}
```
####  Final version
export default connect(
	state => ({count:state}),
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)