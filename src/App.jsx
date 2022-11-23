import { useState } from "react";
function NameList(){
  const[list,setList]= useState(["Jack","Jill","John"]);
  const[name,setName]=useState("")
  const onAddName=()=>{
    list.push(name);
  }
  return(
    <div>››
      <ul>
        {list.map((name)=>(
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type={"text"} value={name} 
      // e  = event  
      onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={onAddName}>add name</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  function addOne() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter />
      <NameList/>
     
    </div>
  );
}

export default App;
