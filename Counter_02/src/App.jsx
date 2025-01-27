import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const mystyle = {
    display : "flex",
    justifyContent: "center",
    alignItem : "center",
    gap : "20px",
  };

  return (
    <>
    <div>
      <h1>Counter</h1>
    </div>
    <div style={mystyle}>
      <div>
        <button onClick={()=>{setValue(value - 1)}}>-</button>
      </div>
      <div style={{marginTop:"10px"}}>
        {value}
      </div>
      <div>
        <button onClick={()=>{setValue(value + 1)}}>+</button>
      </div>
    </div>
    </>
  )
}

export default App
