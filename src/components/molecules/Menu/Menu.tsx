import React, { FC } from "react";
import classNames from 'classnames';
import { Link } from "../../atoms/Link";
import { Container, List } from './Menu.styled';

interface LinkProps {
  label: string;
  href: string;
  target?: string;
}

interface MenuProps {
  links: LinkProps[];
  isOpen: boolean;
  isFixed: boolean;
  className?: string;
}

const renderLink = ({ label, href }: LinkProps, index: number) => {
  return (
    <li key={`bq-menu-${index}`}>
      <Link label={label} href={href} />
    </li>
  )
}

export const Menu:FC<MenuProps> = ({ className="bq-menu", links, isOpen, isFixed }) => {
  return (
    <Container className={classNames(className, { 'is-open' : isOpen }, { 'is-fixed': isFixed })}>
      <List>
        {links.map(renderLink)}
      </List>
    </Container>
  )
}
