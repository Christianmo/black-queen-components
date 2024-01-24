import React, { FC } from 'react';
import classNames from 'classnames';
import { Container, Bar } from './Hamburger.styled';

interface HamburgerProps {
  isOpen?: boolean;
  onClick: () => void;
  className?: string; 
}

export const Hamburger: FC<HamburgerProps> = ({ className="bq-hamburger", isOpen=false, onClick }) => {
  return (
    <Container className={classNames(className, { 'is-open' : isOpen })} onClick={onClick}>
      <Bar />
      <Bar />
      <Bar />
    </Container>
  )
}