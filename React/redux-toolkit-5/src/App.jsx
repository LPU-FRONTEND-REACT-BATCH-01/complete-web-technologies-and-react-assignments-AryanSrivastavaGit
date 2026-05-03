import React from 'react'
import Counter from './components/Counter'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit Demo</h1>
      <Counter />
      <Cart></Cart>
    </div>
  )
}

export default App