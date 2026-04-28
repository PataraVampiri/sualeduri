import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/Main'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="relative min-h-screen">
      
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/b8/5c/d5/b85cd59a0236123eaf084a06663d068b.jpg')"
        }}
      />

      <div className="absolute inset-0 flex flex-col">
        
        <div className="w-full bg-white/80 backdrop-blur-md shadow-md relative z-50">
          <div className="max-w-6xl mx-auto px-4">
            <Header cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 lg:px-30 relative z-10">
          <Main setCartItems={setCartItems} />
        </div>

      </div>
    </div>
  )
}

export default App