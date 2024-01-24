import styled from 'styled-components';

export const StyledParagraph = styled('p')<{ size: string}>`
  line-height: 1.5;
  margin: 0 0 20px 0;

  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.size === 'sm' && `
    font-size: ${props.theme.fontSizes.sm};
  `}

  ${props => props.size === 'md' && `
    font-size: ${props.theme.fontSizes.md};
  `}

  ${props => props.size === 'lg' && `
    font-size: ${props.theme.fontSizes.lg};
  `}
`; 