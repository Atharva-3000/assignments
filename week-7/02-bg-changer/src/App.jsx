import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('')

  useEffect(() => {
    document.body.style.background = color;
  }, [color])
  
  const changeBG = (e) => {
    setColor(e.target.innerText.toLowerCase())
  }

  return (
    <div className='spanContainer'>
      <span onClick={changeBG} style={{backgroundColor:'red'}}>Red</span>
      <span onClick={changeBG} style={{backgroundColor:'yellow'}}>Yellow</span>
      <span onClick={changeBG} style={{backgroundColor:'purple'}}>Purple</span>
      <span onClick={changeBG} style={{backgroundColor:'green'}}>Green</span>
      <span onClick={changeBG} style={{backgroundColor:'blue'}}>Blue</span>
      <span onClick={changeBG} style={{backgroundColor:'orange'}}>Orange</span>
    </div>
  )
}

export default App