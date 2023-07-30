import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '@/images/logo.jpg';
import { Button } from '@components';
import Link from 'next/link';

const navLinks = [
  { id: 1, title: 'Home', text:'', href: '/' },
  { id: 2, title: 'About us', text:'', href: '/about' },
  { id: 3, title: 'Services', text:'', href: '/services' },
  { id: 4, title: 'Clients', text:'', href: '/clients' },
  { id: 5, title: 'Contact', text:'', href: '/contact' },
];
const NavigationLink = ({ href, title, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      title={title}
      className={`text-base ${
        isActive ? 'text-acblue-light' : 'text-white'
      } transition-all duration-200 hover:text-opacity-70`}>
      {' '}
      {children}{' '}
    </Link>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !showShadow) {
        setShowShadow(true);
      } else if (scrollTop === 0 && showShadow) {
        setShowShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showShadow]);
  return (
    <header
      className={`${
        showShadow ? 'drop-shadow-md' : ''
      } bg-opacity-30z-30 bg-acblue fixed left-0 right-0 z-30`}>
      <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8 lg:h-20">
          <div className="flex-shrink-0 pt-10 lg:pt-8 scale-50 lg:scale-100">
            <Link href="/">
              <Image
                width={100}
                height={100}
                src={Logo}
                alt="Alyssa Creative Company Logo"
              />
            </Link>
          </div>

          <div
            className={`flex bg-acblue drop-shadow-xl flex-col mt-[22rem] px-24 py-5 space-y-5   ${
              isOpen ? 'opcaity-100' : 'opacity-0'
            } duration-1000 ease-in-out lg:drop-shadow-none lg:translate-y-0 lg:opacity-100 lg:space-y-0 lg:py-0  lg:px-0 lg:flex-row lg:mt-0 lg:items-center lg:justify-center lg:space-x-10`}>
            {navLinks.map((link) => {
              return (
                <NavigationLink key={link.id} href={link.href} title={link.title}>
                  {link.title}
                </NavigationLink>
              );
            })}
            <Link
              title="Get Started"
              href="/contact"
              legacyBehavior={true}
              passHref>
              <Button title={'Get Started'} href={'/contact'} />
            </Link>
          </div>

          <button
            type="button"
            class="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-500 hover:bg-gray-500"
            onClick={toggleMenu}>
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            {isOpen ? (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`backdrop-blur-md bg-white/30 fixed w-[100vw] h-[100vh] -z-10 duration-1000 ease-in-out ${
            isOpen ? 'opcaity-1' : 'opacity-0'
          }`}></div>
      )}
    </header>
  );
}

export default Navbar;
