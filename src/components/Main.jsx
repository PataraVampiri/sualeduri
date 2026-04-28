import React, { useState } from 'react'

export default function Main({ setCartItems }) {
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const handleDecrease = () => {
    setCount(prev => (prev === 0 ? 0 : prev - 1))
  }

  const handleIncrease = () => {
    setCount(prev => prev + 1)
  }

  const handleAddToCart = () => {
    if (count === 0) return

    setCartItems(prev => [
      ...prev,
      {
        id: Date.now(),
        name: "Sneaker Product",
        quantity: count
      }
    ])

    setCount(0)
  }

  const slideImages = [
    'https://vip.nypost.com/wp-content/uploads/sites/2/2017/05/kb1.jpg',
    'https://i.pinimg.com/1200x/10/fe/5f/10fe5f7976c357fe63973147afb2a28e.jpg',
    'https://i.pinimg.com/736x/9c/c8/24/9cc824a8a1465d4f4725d86e4b51c9bc.jpg',
    'https://i.pinimg.com/1200x/b0/d6/48/b0d648c852b161dda8fd2ddb2bd1a113.jpg'
  ]

  const handleNext = () => {
    setIndex(prev => (prev + 1) % slideImages.length)
  }

  const handlePrev = () => {
    setIndex(prev => (prev === 0 ? slideImages.length - 1 : prev - 1))
  }

  const handleThumbnailClick = (i) => {
    setIndex(i)
  }

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-md lg:flex gap-10 relative z-10">
        
        {/* IMAGE */}
        <div className="relative z-10">
          <div
            onClick={() => setOpen(true)}
            className="relative w-[350px] h-[350px] overflow-hidden rounded-xl cursor-pointer"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="lg:hidden bg-gray-200 absolute top-1/2 left-4 -translate-y-1/2 z-50 px-3 py-1 rounded"
            >
              Prev
            </button>

            <div
              className="flex h-full transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slideImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={i}
                  className="w-full h-full flex-shrink-0 object-cover"
                />
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="lg:hidden bg-gray-200 absolute top-1/2 right-4 -translate-y-1/2 z-50 px-3 py-1 rounded"
            >
              Next
            </button>
          </div>

          <div className="hidden mt-4 lg:flex gap-2">
            {slideImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={i}
                className={`w-16 h-16 rounded-md cursor-pointer ${
                  i === index ? 'border-4 border-black' : 'opacity-60'
                }`}
                onClick={() => handleThumbnailClick(i)}
              />
            ))}
          </div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center max-w-md">
          <p className="text-red-900 font-bold mb-1">h e e l s</p>
          <h1 className="text-2xl font-bold mb-3">Product Name</h1>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <h2 className="text-xl font-bold mb-4">$125.00</h2>
          <h2 className="text-gray-600 mb-6 line-through">$250.00</h2>
          <h3 className="text-red-900 font-bold mb-6">50% off</h3>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg">
              <button onClick={handleDecrease} className="text-2xl font-bold w-6">-</button>
              <h2 className="text-xl min-w-[20px] text-center">{count}</h2>
              <button onClick={handleIncrease} className="text-2xl font-bold w-6">+</button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-red-900 text-white px-6 py-2 rounded-lg hover:opacity-80 transition"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={slideImages[index]}
              className="w-[400px] h-[400px] object-cover rounded-xl"
            />

            <div className="flex justify-between mt-4">
              <button onClick={handlePrev} className="text-white">Prev</button>
              <button onClick={handleNext} className="text-white">Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}