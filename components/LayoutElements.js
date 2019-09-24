import styled from 'styled-components'
import {HomeLink} from '../components/StyledLink'
import Title from '../components/Title'


const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Section = styled.section`
  margin-bottom: 2rem;
  min-width: 30%
  @media(max-width: 480px) {
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
`

export const StyledSection = (props) => <Section>{props.children}</Section>

export const StyledMain = (props) => <Main>{props.children}</Main>

export const StyledHeader = (props) => (
  <Header>
    <HomeLink href="/"><span>Dana Codes</span></HomeLink>
    <Title> {props.children} </Title>
  </Header>
)
