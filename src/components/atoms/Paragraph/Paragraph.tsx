import React, { FC } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { StyledParagraph } from './Paragraph.styled';

interface ParagraphProps {
  text: string;
  size?: string;
}

export const Paragraph:FC<ParagraphProps> = ({ text, size='md'  }) => {
  const cleanText = DOMPurify.sanitize(text);
  return  (
    <StyledParagraph
      className='bq-paragraph'
      size={size} 
      dangerouslySetInnerHTML={ {__html: cleanText } }
    />
  )
}
