import React from 'react'

const Header = () => {


  return (
    <header className='flex flex-row items-center justify-center bg-[#151C25] py-6 px-10'>
      
      <div className='flex flex-row items-center gap-8'>
        <button className='border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg'>About Me</button>
        <button className='border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg'>Projects</button>
        <button className='border border-white text-white hover:text-black hover:bg-[#55E5A4] py-2 px-4 rounded-lg'>Contact</button>
      </div>

      
    </header>
  )
}

export default Header