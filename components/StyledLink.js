import styled from 'styled-components'

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colours.accent};
  &:visited {
    color: ${({ theme }) => theme.colours.grey};
  }
`


export const HomeLink = styled.a`
  color: ${({ theme }) => theme.colours.text};
  font-weight: bold;
  display: flex;
  justify-content: center;
  letter-spacing: .1rem;
  margin: 1rem auto;

`
export default StyledLink
