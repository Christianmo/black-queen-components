import styled, { createGlobalStyle } from 'styled-components';
import { mq } from '../../../common/utils';
import { breakpoints } from '../../../common/constants';
 
export const GlobalStyle = createGlobalStyle<{paddingTop: number}>`
  body {
    padding-top: ${(props) => props.paddingTop}px;
  }
`;

export const Wrapper = styled('div')`
  align-items: center;
  background-color: rgb(255, 255, 255);
  display: flex;
  left: 0;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;

  @media ${mq(breakpoints.large, 'min')} {    
    &.is-fixed {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Column = styled('div')`
  display: flex;
  justify-content: center;
  max-height: 40px;
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