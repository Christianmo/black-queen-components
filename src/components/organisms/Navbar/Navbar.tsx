import React, { FC, useEffect, useState, useRef } from "react";
import classNames from 'classnames';
import { singlePageNavigation } from 'single-page-scrolling-navigation';
import { Image } from "../../atoms/Image";
import { Hamburger } from "../../atoms/Hamburger";
import { Menu } from "../../molecules/Menu";
import { Wrapper, Column } from './Navbar.styled';

interface LinkProps {
  label: string;
  href: string;
  target?: string;
}

interface HeaderProps {
  logo: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  fixedLogo?: {
    src: string;
    alt: string;
    height: number;
    width: number;
  }
  links: LinkProps[];
  className?: string;
  options?: any;
}

export const Navbar: FC<HeaderProps> = ({ className="bq-navbar", logo, fixedLogo, links, options }) => {
  const [isMenuOpen, setMenuState] = useState(false);
  const [isNavbarFixed, setHeaderState] = useState(false);
  
  const headerEl = useRef<any>()

  const handleScroll = () => {
    const height = headerEl?.current?.offsetHeight;
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const isFixed = top > height;
    setHeaderState(isFixed);
  };

  const setHandleScroll = () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  };

  const handleClick = () => {
    setMenuState(state => !state);
  }

  const toggleMenu = () => {
    setMenuState(false);
  }

  useEffect(() => {
    setHandleScroll();
    singlePageNavigation({
      selector: '.bq-menu',
      childSelector: '.bq-menu a',
      time: 2000,
      easing: 'easeInOutQuad',
      gap: 0,
      cb: () => toggleMenu(),
      ...options,
    });
  }, [])

  return (
    <Wrapper className={classNames(className, { 'is-fixed': isNavbarFixed })} ref={headerEl}>
      <Column>
        {fixedLogo && isNavbarFixed ? (
          <Image 
            src={fixedLogo.src}
            alt={fixedLogo.alt}
            height={fixedLogo.height}
            width={fixedLogo.width}
            isSingle
          />
        ) : (
          <Image 
            src={logo.src}
            alt={logo.alt}
            height={logo.height}
            width={logo.width}
            isSingle
          />
        )}
      </Column>
      <Column>
        <Menu
          links={links}
          isOpen={isMenuOpen}
          isFixed={isNavbarFixed} />
      </Column>
      <Column>
        <Hamburger isOpen={isMenuOpen} onClick={handleClick} />
      </Column>
    </Wrapper>
  )
}