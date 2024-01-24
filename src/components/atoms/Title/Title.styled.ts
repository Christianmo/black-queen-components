import styled from 'styled-components';

export const StyledTitle = styled('div')<{variant: string}>`
  margin: 0 0;
  
  ${props => props.variant === 'title' && `
    font-size: ${props.theme.fontSizes.xxlg};
    margin: 0;
  `}

  ${props => props.variant === 'subtitle' && `
    font-size: ${props.theme.fontSizes.lg};
    margin: 0;
  `}
`