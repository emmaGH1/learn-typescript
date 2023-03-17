import React from 'react'
import FirstPage from './Pages/FirstPage'
import Hooks from './Pages/Hooks'
import { CounterReducer } from './Pages/ReducerTS'

const App = () => {
  return (
    <div>
      <FirstPage />
      <Hooks />
      <CounterReducer>{(num: number) => <>Current Count: {num}</>}</CounterReducer>
    </div>
  )
}

export default App
