import React from 'react'

function Header() {
  return (
    <header className='fixed z-20 w-full h-12 flex justify-center items-center border-b border-gray-500'>
      <div className='h-full w-full flex justify-end gap-10'>
        <h1 className='text-4xl w-[45%]'>MAP</h1>
        <div>
            <p className='w-36 h-full flex justify-center items-center'>
                Connexion
            </p>
        </div>
      </div>
    </header>
  )
}

export default Header
