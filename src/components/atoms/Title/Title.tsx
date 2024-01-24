import React, { FC } from 'react';
import { StyledTitle } from './Title.styled'

interface TitleProps {
  text: string;
  variant?: 'title' | 'subtitle';
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

export const Title: FC<TitleProps> = ({ className='bq-title', text, variant='title', tag='h1' }) => {
  return (
    <StyledTitle as={tag} className={className} variant={variant}>{text}</StyledTitle>
  )
}