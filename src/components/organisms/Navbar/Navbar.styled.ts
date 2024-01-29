import styled, { createGlobalStyle } from 'styled-components';
import { mq } from '../../../common/utils';
import { breakpoints } from '../../../common/constants';
 
export const GlobalStyle = createGlobalStyle<{paddingTop: number}>`
  body {
    padding-top: ${(props) => props.paddingTop}px;
  }
`;

export const Wrapper = styled('div')`
  left: 0;
  position: fixed;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 100%;
`;

export const Container = styled('div')`
  align-items: center;
  display: flex;
  padding: 20px;
  transition: all 0.2s ease-in-out;
`; 

export const Column = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;

  &:nth-child(1) {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    justify-content: center;
  }

  &:nth-child(3) {
    justify-content: flex-end;

    @media ${mq(breakpoints.large, 'min')} {
      button {
        display: none;
      }
    } 
  }  
`;