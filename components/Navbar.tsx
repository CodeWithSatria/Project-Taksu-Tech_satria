"use client"
import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';
import NextLink from 'next/link';
import { Nav_links } from '@/source';


interface Header {
  key: string;
  href: string;
  label: string;
}


const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleNavbar = () => {
    setNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar){
      const isScrolled = window.scrollY > 0;
      navbar.style.backgroundColor = isScrolled ? '#fff' : 'transparent';
      navbar.style.borderBottom = isScrolled ? '1px solid #ccc' : 'none';
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getHeaderClass = (header : Header) => {
    return header.key === 'download_CV'
      ? 'text-[#191919] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300'
      : 'text-[#191919]';
  };

  const renderMobileNav = () => {
    return (
      <div className={`w-screen md:hidden absolute top-0 z-[999] bg-white`}>
        <div className="flex flex-col md:flex md:flex-row mt-16 md:mt-0  ">
          {Nav_links.map((header) => (
            <NextLink href={header.href} key={header.key}>
              <div className={` cursor-pointer ${getHeaderClass(header)}`}>
                <span className="text-xl flex mx-4 my-2 justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 ">
                  {header.label}
                </span> 
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    );
  };

  const renderDesktopNav = () => {
    return (
      <div className="flex-col md:flex md:flex-row text-center  z-[999]">
        {Nav_links.map((header) => (
          <NextLink href={header.href} key={header.key}>
            <div className={` cursor-pointer ${getHeaderClass(header)}`}>
              <span className="text-xl flex mx-4 my-6 gap-4 md:flex align transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                {header.label}
              </span>
            </div>
          </NextLink>
        ))}
      </div>
    );
  };

  return (
    <nav
      id="navbar"
      className="flex flex-col-reverse items-center justify-between  w-full md:h-20 md:px-12 2xl:px-12 md:flex md:items-center md:flex-row relative  z-[999]"
      style={{ position: 'fixed', width: '100%', zIndex: '1000' }}
    >
      <div className='invisible md:visible'>
        <a href="#hero" className='text-xl'>Satria</a>
      </div>
      {isMobile && (
        <div className="md:hidden items-center mt-3 md:mt-0 z-[1001]">
          <div role="button" onClick={toggleNavbar} className="relative z-50">
            <Bars3BottomRightIcon className="h-12 w-12 flex items-end " />
          </div>
        </div>
      )}

      {isMobile && isNavOpen && renderMobileNav()}

      {!isMobile && renderDesktopNav()}
    </nav>
  );
};

export default Navbar;