import styled from 'styled-components';

export const Container = styled('div')`
  box-sizing: border-box;
  padding: 30px 20px;
  border: solid 1px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
  border-color ${(props) => props.theme.colors.black};
  border-radius: 8px;
  display: flex;
`; 

export const CardImage = styled('div')`
  box-sizing: border-box;
  margin-right: 30px;
  
  img {
    max-width: 100%;
    height: auto;
  }
`

export const CardInfo = styled('div')`
  box-sizing: border-box;
  width: 100%;
`