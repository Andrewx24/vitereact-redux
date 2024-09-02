import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { RootState } from  '../src/store'


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch({ type: 'counter/increment' })}
            >
            Increment
            </button>
            <span>{count}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch({ type: 'counter/decrement' })}
            >
            Decrement
            </button>
        </div>
     
   
    </div>
  )
}

export default Counter