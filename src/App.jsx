import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import Newsitem from "./Components/Newsitem"
import React, { useEffect, useState } from 'react'

const App = () => {
  const [category,setCategory] = useState('general');
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category = {category}/>
    </div>
  )
}

export default App
