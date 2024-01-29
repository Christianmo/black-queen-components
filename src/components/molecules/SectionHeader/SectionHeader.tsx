import React, { FC } from "react";
import { Title, Paragraph } from "../../atoms";

import { HelpText } from './SectionHeader.styled';

interface SectionHeaderPros {
  title: string;
  helpText?: string;
  description: string;
  titleTag?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeader:FC<SectionHeaderPros> = ({ className="bq-section-header", titleTag="h3", helpText, title, description }) => {
  return (
    <div className={className}>
      {helpText && <HelpText className="bq-helptext">{helpText}</HelpText>}
      <Title text={title} tag={titleTag} />
      <Paragraph text={description} />
    </div>
  )
}
