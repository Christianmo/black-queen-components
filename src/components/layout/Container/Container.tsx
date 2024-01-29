import React, { FC } from 'react';
import { Component } from './Container.styled';

interface ContainerProps {
  children: any;
}

export const Container:FC<ContainerProps> = ({ children }) => {
  return (
    <Component>{children}</Component>
  )
}