import React, { memo } from 'react'
import { Link } from 'react-router'

type Props = {
  firstname: string
}

const Header = memo(({ firstname }: Props) => {
  return (
    <header className='bg-yellow-500 flex justify-between w-full'>
      <nav className='flex justify-around w-full p-3'>
        <Link to={"/"} className='hover:text-blue-500 '>Home</Link>
        <Link to={"/blog"} className='hover:text-blue-500 '>Blog</Link>
        <span className='font-bold leading-none tracking-tight text-gray-900'>It's a me, {firstname}!</span>
      </nav>
    </header>
  )
});

export default Header