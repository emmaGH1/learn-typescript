import { Dispatch, ReactNode, SetStateAction, useState } from "react";

type CounterProps = {
    setCount: Dispatch<SetStateAction<number>>,
    children: ReactNode
} 

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <div>
       <button onClick={() => setCount((prev: number) => prev + 1)}>+</button>
       <div>{children}</div>
       <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  )
}

export default Counter