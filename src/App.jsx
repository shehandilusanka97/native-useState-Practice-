import { useState } from 'react'

function App() {
 const[count,setCount]= useState(10);
 function addOne(){
 
 }
  return (
    <div className="App">
     <button onClick={addOne}>Count = {count}</button>
    </div>
  )
}
 
export default App
