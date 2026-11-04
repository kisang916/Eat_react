import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {/* 앱 컴포넌트 in리액트 */
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <h2>안녕하세요</h2>
        <h3>자식태그</h3>
      </div>


  )
}

export default App
