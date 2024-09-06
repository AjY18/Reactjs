import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App( ) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4 pr-5 rounded-2xl"> tailwind working</h1>
<Card username="ajay" btnText="click me"/>
<Card username="rahul" btnText="see me"/>
     

</>  )
}

export default App
