import React,{useReducer} from 'react'
import './style.css'

function UseReducer() {
 // initial value for the state variable
//   const [myNum, setMyNum] = useState(0);

  const reducer = (state, action) => {
   if(action.type === 'INCR'){
    state = state + 1
   }

   if(state > 0 && action.type === 'DECR'){
    state = state - 1
   }

   return state;
  }
  const [state, dispatch] = useReducer(reducer, 0);
 
  return (
    <>
    <div className='center_div'>
        <p>{state}</p>
        <div className='button2' onClick={() => dispatch({type: 'INCR'})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           INCR

        </div>

        <div className='button2' onClick={() => dispatch({type: 'DECR'})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR

        </div>
    </div>
    </>
  )
}

export default UseReducer
