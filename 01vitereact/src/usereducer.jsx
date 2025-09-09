import React , { useReducer } from "react";
const initialState = { count:0 };

function reducer( state , action )
{
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count === 20 ? 20 : state.count + 1 };
        case 'DECREMENT':
            return { count: state.count === 0 ? 0 : state.count - 1 };
        case 'RESET' :
            return { count: 0};
        case 'ADD_VALUE':
            return { count: state.count === 20 ? 20 : state.count + action.payload };            
        default:
            throw new Error('Unexpected action type')
    }
}

function Counters() {

    const [state , dispatch] = useReducer( reducer , initialState );
    
    return(
        <div>
            <h2>Count : {state.count} </h2>
                <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
    <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
    <button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
    <button onClick={() => dispatch({ type: 'ADD_VALUE' , payload : 5})}>Add 5</button>
        </div>
    ) 

}
export default Counters