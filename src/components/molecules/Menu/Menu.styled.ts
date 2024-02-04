import styled from 'styled-components';
import { mq, getRem } from '../../../common/utils';
import { breakpoints } from '../../../common/constants';

export const Container = styled('div')`
  @media ${mq(breakpoints.large - 1, 'max')} {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);
    height: 100vh;
    opacity: 0;
    padding: 50px 20px 20px;
    position: absolute;
    transition: all 0.2s ease-in-out;
    top: 0;
    right: -100%;
    width: 80%;
    z-index: 10;

    &.is-open {
      background-color: white;
      opacity: 1;
      padding: 20px;
      right: 0%;
    }
  }
`;

export const List = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: ${getRem('30px')};

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: block;
    padding: 10px;
    position: relative;

    &:hover {
      text-decoration: none;
    }
  }

  @media ${mq(breakpoints.large, 'min')} {
    display: flex;
  
    li {
      display: inline-flex;

      a {
        &:hover {
          text-decoration: none;
        }      
      }
    }
  }
`;
