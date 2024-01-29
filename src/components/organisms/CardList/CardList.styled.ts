import { mq } from '../../../common/utils';
import { breakpoints } from '../../../common/constants';

import styled from 'styled-components';

export const Container = styled('section')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media ${mq(breakpoints.medium)} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mq(breakpoints.large)} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .bq-card {
    display: flex;
    flex-direction: column;
    
    @media ${mq(breakpoints.large)} {
      flex-direction: row;
    }     
  }
`; 
