import React,{ useState } from 'react'
import './App.css'



function App() {
	let [counter,setcounter] = useState(1)
const add =()=>{

	setcounter(counter+1)
}
const remove =()=>{

	setcounter(counter-1)
}
	return(
<div>
<h2>counter value:{counter}</h2>


<button onClick={add}>add</button>
<br />
<button onClick={remove}>remove</button>
</div>)
}


export default App