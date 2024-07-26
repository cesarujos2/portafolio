import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'
import useTheme from '../hooks/useTheme';
import ButtonTheme from './ButtonTheme';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';

export function Navigator({ menuItems }: { menuItems: string[] }) {
  const { theme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [select, setSelect] = useState('');
  const { y: pageYOffset } = useWindowScroll();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const path = location.pathname === '/' ? menuItems[0].toLowerCase() : location.pathname.slice(1).toLowerCase();
    setSelect(path);
  }, [location, menuItems]);

  useEffect(() => {
    if (pageYOffset > 10) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }

  }, [pageYOffset]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='bg-transparent'
      isBlurred={showHeader}
    >
      <NavbarMenuToggle className='sm:hidden' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      <NavbarBrand>
        <Link to={`/`} color='foreground' onClick={() => setSelect('')} className='flex gap-1 justify-center items-center'>
          <img src={theme === 'light' ? logoLight : logoDark} width={40} height={40} alt="" />
          <p className="hidden md:block font-bold text-inherit" >CÉSAR URIARTE</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={`/${item.toLowerCase() == menuItems[0].toLowerCase() ? '' : item.toLowerCase()}`}
              onClick={() => setSelect(item.toLowerCase())}
            >
              <p className={select === item.toLowerCase() ? 'font-bold text-primary' : ''}>{item}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <ButtonTheme />
        <NavbarItem>
          <Link to={"/contact"}>
            <div className='px-4 py-2 rounded-xl bg-primary text-2sm font-sans text-white dark:text-black dark:font-semibold'>Let's Connect</div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full flex justify-center"
              to={`/${item.toLowerCase() == menuItems[0].toLowerCase() ? '' : item.toLowerCase()}`}
              onClick={() => { setSelect(item.toLowerCase()); setIsMenuOpen(false); }}
            >
              <p className={select === item.toLowerCase() ? 'font-bold text-primary' : ''}>{item}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
