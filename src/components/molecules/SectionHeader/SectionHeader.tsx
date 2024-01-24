import React, { FC } from "react";
import { Title, Paragraph } from "../../atoms";

interface SectionHeaderPros {
  helpText: string;
  title: string;
  description: string;
  titleTag?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeader:FC<SectionHeaderPros> = ({ className="bq-section-header", titleTag="h3", helpText, title, description }) => {
  return (
    <div className={className}>
      {helpText && <span className="bq-helptext">{helpText}</span>}
      <Title text={title} tag={titleTag} />
      <Paragraph text={description} />
    </div>
  )
}
