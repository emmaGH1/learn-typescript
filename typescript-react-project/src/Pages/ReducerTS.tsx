import { ChangeEvent, ReactNode, useReducer } from "react";

const initState = { 
    count: 0,
    text: ''
}

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE
    payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
         return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
          return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.INPUT_TEXT:
          return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
    }
}

type ChildrenType = {
    children: (num: number) => ReactNode
}

export const CounterReducer = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT})
    const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT})

    const inputText = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUCER_ACTION_TYPE.INPUT_TEXT, payload: e.target.value})

    return (
        <>
          <h1>{children(state.count)}</h1>
          <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
          <input type="text" onChange={inputText} />
          <h2>{state.text}</h2>
        </>
    )
}