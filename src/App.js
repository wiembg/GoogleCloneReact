
import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const[setDarkTheme, darkTheme ] = useState(true)
  return (
    <div className={darkTheme ? 'light':''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
    <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />

      <Footer/>
     
       </div></div>
  )
}

export default App