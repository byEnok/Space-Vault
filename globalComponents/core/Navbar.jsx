import { ModeToggle } from './Mode-Toggle'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex items-center border-b-2 border-buttonBorder px-2 w-full'>
      <div className='flex justify-evenly items-center text-title  text-2xl w-full py-2 '>
        <Link href='/' className='transition-colors duration-500 ease-in-out hover:text-hover'>
          Home
        </Link>
        <Link href='/Submit' className=' transition-colors duration-500 ease-in-out hover:text-hover'>
          Submit Image
        </Link>
        <Link href='#' className='transition-colors duration-500 ease-in-out  hover:text-hover'>
          About
        </Link>
        {/* <Link href='#' className='hover:text-textHover'>
          <span className='material-symbols-outlined text-4xl'>login</span>
        </Link> */}
      </div>
      {/* <ModeToggle /> */}
    </div>
  )
}

export default Navbar
