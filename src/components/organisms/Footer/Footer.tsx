import React, { FC } from "react";
import { Title } from "../../atoms/Title";
import { List } from "../../atoms/List";
import { Image } from "../../atoms/Image";
import { Container, Menus, Menu, Logo } from './Footer.styled';

interface LinkValues {
  text: string;
  href: string;
  target?: string;
}

type MenuValues = {
  title: string;
  links: LinkValues[];
}

interface FooterProps {
  logo: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  isotype?: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  menus: MenuValues[];
  className?: string;
}

const renderMenu = (menu: MenuValues, index: number) => {
  return (
    <Menu key={`bq-footer-column-${index}`}>
      <Title text={menu.title} tag="h4" />
      <List items={menu.links} />
    </Menu>  
  )
}

export const Footer:FC<FooterProps> = ({ logo, menus, className="bq-footer" }) => {
  return (
    <Container className={className}>
      <Logo>
        <Image
          src={logo.src}
          alt={logo.alt}
          height={logo.height}
          width={logo.width}
          isSingle
        />
      </Logo>
      <Menus>
        {menus.map(renderMenu)}
      </Menus>
    </Container>
  )
}