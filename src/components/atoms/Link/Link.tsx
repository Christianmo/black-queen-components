import React, { FC } from "react";
import { StyledLink } from './Link.styled';

interface LinkProps {
  href: string;
  label: string;
  target?: string;
}

export const Link: FC<LinkProps> = ({ href, label, target="_self" }) => {
  return (
    <StyledLink className="bq-link" href={href} target={target}>
      {label}
    </StyledLink>
  )
}