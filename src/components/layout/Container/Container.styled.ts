import { breakpoints } from '../../../common/constants';
import { mq, getRem } from '../../../common/utils';

import styled from "styled-components";

export const Component = styled('div')`
  box-sizing: border-box;
  margin: auto;
  padding: 0 ${getRem('24px')};
  width: 100%;

  @media ${mq(breakpoints.small)} {
    max-width: 540px;
  }

  @media ${mq(breakpoints.medium)} {
    max-width: 768px;
  }

  @media ${mq(breakpoints.large)} {
    max-width: 960px;
  }

  @media ${mq(breakpoints.xlarge)} {
    max-width: 1140px;
  }

  @media ${mq(breakpoints.xxlarge)} {
    max-width: 1320px;
  }
`;