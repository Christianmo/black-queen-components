import styled from 'styled-components';

export const StyledLink = styled('a')`
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
`; 