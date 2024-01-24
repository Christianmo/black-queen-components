import React, { FC } from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps {
  label: string;
  color?: string;
  variant?: 'basic' | 'outline' | 'contained';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export const Button: FC<ButtonProps> = ({ 
  className="bq-button",
  label,
  href,
  target='_self',
  color="#1280BE",
  variant="contained",
  size="md",
  onClick
}) => {
  const tag = href ? 'a' : 'button';
  const extraProps = {
    ...(href && { href }),
    ...(target && { target }),
    ...(onClick && { onClick }),
  }

  return (
    <StyledButton
      className={className}
      as={tag}
      name='bq-button'
      variant={variant}
      size={size}
      color={color}
      {...extraProps}
    >
      <span>{label}</span>
    </StyledButton>
  )
}