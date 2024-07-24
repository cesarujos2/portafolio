import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'
import useTheme from '../hooks/useTheme';
import ButtonTheme from './ButtonTheme';
import { useState } from 'react';

export function Navigator({ menuItems }: { menuItems: string[] }) {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [select, setSlect] = useState(menuItems[0].toLowerCase());


  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle className='sm:hidden' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      <NavbarBrand>
        <Link href={`/`} color='foreground' onPress={() => setSlect('')}>
          <img src={theme === 'light' ? logoLight : logoDark} width={40} height={40} alt="" />
          <p className="hidden sm:block font-bold text-inherit" >CÉSAR URIARTE</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color={select === item.toLowerCase() ? 'primary' : 'foreground'}
              href={`#${item.toLowerCase()}`}
              onPress={() => setSlect(item.toLowerCase())}
            >
              <p className={select === item.toLowerCase() ? 'font-bold' : ''}>{item}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <ButtonTheme />
        <NavbarItem>
          <Button color='primary' ><strong>Let's Connect</strong></Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full flex justify-center"
              color={select === item.toLowerCase() ? 'primary' : 'foreground'}
              href={`/#${item.toLowerCase()}`}
              onPress={() => setSlect(item.toLowerCase())}
              size="md"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
