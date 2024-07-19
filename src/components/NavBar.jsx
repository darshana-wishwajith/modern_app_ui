import { useState } from 'react'
//Assets
import { logo, menu, close} from './../assets';
//Text content
import { navLinks } from './../constants';

function NavBar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>

      {/* Logo */}
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>
      
      {/* Nav Link */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((navLink, index) => (
            <li 
              key={navLink.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white`}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
      </ul>

      {/* Mobile menu */}
      <div className='sm:hidden flex justify-end items-center' onClick={() => setToggle(prevToggle => !prevToggle)}>
        <img src={!toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain'/>
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border border-white/5`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((navLink, index) => (
              <li 
                key={navLink.id} 
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length -1 ? 'mb-0' : 'mb-5'} text-white`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
        </ul>
      </div>


    </nav>
  )
}

export default NavBar