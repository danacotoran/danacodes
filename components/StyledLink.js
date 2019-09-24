import styled from 'styled-components'

const StyledLink = styled.a`
  color: rgb(213,213,213);
  &:visited {
    color: rgb(150,150,150);
  }
`


export const HomeLink = styled.a`
  text-transform: uppercase;
  color: rgb(240,240,240);
  background-color: rgb(23,24,26);
  text-decoration: none;
  height: 5rem;
  width: 5rem;
  border-radius: .3rem;
  font-weight: bold;
  text-align: left;
  word-break: break-word;
  display: flex;
  align-items: center;
  margin: 1rem auto 1rem auto;
  span {
    line-height: 2rem;
    letter-spacing: .1rem;
    font-size: 1rem;
    padding: .5rem;
  }
  @media (max-width: 480px) {
    height: 4.5rem;
    width: 4.5rem;
    span {
      font-size: .8rem;
      line-height: 1.6rem;
    }
  }
`
export default StyledLink
