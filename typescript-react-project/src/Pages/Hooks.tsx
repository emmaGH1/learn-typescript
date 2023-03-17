import {useState, useEffect, useCallback, useMemo, MouseEvent, KeyboardEvent, useRef} from 'react'

interface User {
   id: number,
   username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}
 
const myNum: number = 30
 
const Hooks = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(null)
  
 const memoizedValue = useMemo(() => fib(myNum), [])
  const addtwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount( prev => prev + 2), [count])

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef.current)
  console.log(inputRef?.current?.value);
  
 
  useEffect(() => {
    console.log('Mounting')
    console.log('Users:', users)

  return () => console.log('unmounting')
  })

  return (
    <div className='App'>
       <h1>{count}</h1>
       <button onClick={addtwo}>Add</button>
       <h2>{memoizedValue}</h2>
       <input type="text" ref={inputRef} />
    </div>
  )
}

export default Hooks