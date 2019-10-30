import styled from 'styled-components'
import Link from 'next/link'
import { HomeLink } from '../components/StyledLink'
import Title from '../components/Title'


const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Section = styled.section`
  margin-bottom: 2rem;
  width: 30%;
  @media(min-width: 1920px) {
    width: 20%;
  }
  @media(max-width: 1024px) {
    width: 50%;
  }
  @media(max-width: 480px) {
    width: 70%;
  }
  @media(max-width: 375px) {
    width: 90%;
  }
`
const Header = styled.header`
  opacity: 0;
  @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
  }
  text-align: center;
  animation: fadeIn .3s .5s ease-in-out forwards;
  margin-bottom: 2rem;

  @media (min-width: 481px) {
    margin-bottom: 3rem;
  }
`

export const StyledSection = (props) => <Section>{props.children}</Section>

export const StyledMain = (props) => <Main>{props.children}</Main>

export const StyledHeader = (props) => (
  <Header>
    <Link href="/" passHref>
      <HomeLink><span>danacodes.com</span></HomeLink>
    </Link>
    <Title> {props.children} </Title>
  </Header>
)
