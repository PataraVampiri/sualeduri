import React, { useState } from 'react'

export default function Header({ cartItems, setCartItems }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showCartItem, setShowCartItem] = useState(false)

  const navItems = [
    { path: '#', label: "Collections" },
    { path: '#', label: "men" },
    { path: '#', label: "women" },
    { path: '#', label: "About" },
    { path: '#', label: "Contact" },
  ]

  return (
    <>
      <div className='px-4 py-2 flex justify-between'>
        
        <div className='flex gap-2'>
          <button className='lg:hidden' onClick={() => setIsOpen(true)}>
            Burger
          </button>
          <img src="/sneakers.png" alt="" />
        </div>

        {/* NAV */}
        <div className='hidden lg:flex'>
          <ul className='flex gap-2'>
            {navItems.map((navItem, i) => (
              <a key={i} className='text-base font-bold' href={navItem.path}>
                {navItem.label}
              </a>
            ))}
          </ul>
        </div>

        {/* CART */}
        <div className='relative'>
          <span
            onClick={() => setShowCartItem(!showCartItem)}
            className='cursor-pointer font-bold'
          >
            Cart
          </span>

          {cartItems.length > 0 && (
            <span className='rounded-xl px-1 py-0.5 bg-red-900 text-white absolute -top-2.5 left-3/4 text-xs'>
              {cartItems.length}
            </span>
          )}

          {showCartItem && (
            <div className='fixed left-1/2 -translate-x-1/2 top-8 bg-white border-2 w-11/12 p-4 z-50'>
              <h1 className='text-lg font-bold mb-3'>Cart Items</h1>

              {cartItems.length === 0 ? (
                <p className='text-gray-500'>Cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className='flex justify-between items-center mb-2 border-b pb-2'
                  >
                    <p>{item.name} (x{item.quantity})</p>
                    <button
                      onClick={() =>
                        setCartItems(prev =>
                          prev.filter(i => i.id !== item.id)
                        )
                      }
                      className='bg-red-900 text-white px-2 py-1 text-sm rounded'
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='absolute inset-0 bg-black/40 z-40'
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`p-4 fixed w-3/4 h-screen bg-white top-0 left-0 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-200`}
      >
        <button onClick={() => setIsOpen(false)}>X</button>

        <ul className='flex flex-col gap-2'>
          {navItems.map((navItem, i) => (
            <a key={i} className='text-base font-bold' href={navItem.path}>
              {navItem.label}
            </a>
          ))}
        </ul>
      </div>
    </>
  )
}