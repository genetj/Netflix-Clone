import { useState } from 'react'
import './App.css'
// import Home from './Pages/Home/Home'
import Header from './Commponents/Header/Header'
import Footer from './Commponents/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
          {/* <Home/> */}
          <Header/>
          <Footer/>
          
      </>

    
  )
}

export default App
