import styled from 'styled-components';

export const Container = styled('div')`
  padding: 50px 70px;
  position: relative;
`;

export const ArrowButton = styled('button')`
  align-items: center;
  background-color: white;
  border: 0;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  height: 30px;
  padding: 0;
  position: absolute;
  width: 30px;
  top: 50%;
  transform: translateY(-10px);

  &:first-child {
    left: 20px;
    padding-left: 5px;

    span {
      transform: rotate(-40deg);
    }
  }

  &:last-child {
    padding-right: 5px;
    right: 20px;

    span {
      transform: rotate(135deg);
    }
  }  

  span {
    border-top: solid #000 1px;
    border-left: solid #000 1px;
    color: transparent;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
`;

export const Bullets = styled('div')`
  display: flex;
`;

export const BulletButton = styled('button')`
  border: 0;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;