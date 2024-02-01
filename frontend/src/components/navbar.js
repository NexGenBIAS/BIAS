import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { useSubjectContext } from '../context/subjectContextProvider';
import { useCategoryContext } from '../context/categoryContextProvider';

const Navbar = () => {
  const links = [
    { label: 'Home', key: 'home', href: '/home' },
    { label: 'Add Assignment', key: 'add_assignment', href: '/add-assignment' },
    { label: 'About', key: 'about', href: '/about' },
    { label: 'Feedback', key: 'feedback', href: '/feedback' },
  ];

  const [isNavOpen, setNavOpen] = useState(false);
  const { updateSelectedSubject } = useSubjectContext();
  const { updateSelectedCategory } = useCategoryContext();

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link) => {
    // Check if the clicked link is "Home"
    if (link.key === 'home') {
      // Set subject and category to null
      updateSelectedSubject(null);
      updateSelectedCategory(null);
    }

    // Close the navigation menu
    toggleNav();
  };

  const handleLogoClick = () => {
    updateSelectedCategory(null);
    updateSelectedSubject(null);
  }

  return (
    <nav className='bg-primary text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto padding-container py-6'>
        <Link to='/home' className='relative'>
          <h1 className='font-bold italic md:text-4xl  text-2xl  ' onClick={handleLogoClick}>BIAS</h1>
          <p className='text-xs absolute bottom-[-5px] right-[-25px] text-white z-10 bg-blue-900 px-1 py-[0.150rem] border-white border rounded-md'>Beta</p>
        </Link>

        <button
          onClick={toggleNav}
          type='button'
          className='inline-flex items-center p-2 justify-center md:hidden text-xl hover:translate-x-[-5px] transition'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <FaBars className='outline-none' />
        </button>

        <div
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto relative z-10`}
          id='navbar-default'
        >
          <ul className=' flex flex-col p-4 md:p-0  rounded-lg bg-primary md:flex-row  md:mt-0  md:bg-primary md:static absolute top-0 right-0 w-[100%] text-center gap-4 md:gap-8 '>
            {links.map((link) => (
              <li
                key={link.key}
                className='block py-2 px-3 text-secondary bg-secondary md:bg-primary md:p-0 hover:text-primary rounded'
              >
                <Link to={link.href} onClick={() => handleLinkClick(link)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
