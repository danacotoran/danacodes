
import styled from 'styled-components'

const TitleContainer = styled.div`
  white-space: nowrap;
`
const Heading = styled.h1`
    @keyframes stretchyHeading {
      0% {
        font-variation-settings: 'wdth' 150, 'wght' 900;
        opacity: 1;
      }
      5% {
        font-variation-settings: 'wdth' 130, 'wght' 900;
        opacity: 1;
      }

      95% {
        font-variation-settings: 'wdth' 400, 'wght' 900;
        opacity: 1;
      }
      100% {
        font-variation-settings: 'wdth' 380, 'wght' 900;
        opacity: 1;
      }
    }

    @keyframes stretchyHeading2 {
      0% {
        font-variation-settings: 'wdth' 380, 'wght' 900;
        opacity: 1;
      }

      5% {
        font-variation-settings: 'wdth' 400, 'wght' 900;
        opacity: 1;
      }
      95% {
        font-variation-settings: 'wdth' 130, 'wght' 900;
        opacity: 1;
      }
      100% {
        font-variation-settings: 'wdth' 150, 'wght' 900;
        opacity: 1;
      }
    }
  display: inline-block;
  opacity: 0;
  font-size: 4rem;
  position: relative;
  margin-top: 0;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-family: 'Bandeins Strange Variable', -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  font-variation-settings: 'wght' 900;
  animation: stretchyHeading2 .3s ease-in-out forwards;
  transition: opacity .5s 1s;
  text-shadow: 2px 2px rgba(0,0,0,0.2);
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 0rem;
    background-color: ${({ theme }) => theme.colours.accent};
    position: absolute;
    z-index: -1;
    bottom: 0rem;
    transition: height .3s .3s ease-in-out;
  }

  @media(min-width: 768px) {
    &:hover {
      animation: stretchyHeading .3s ease-in-out forwards;
      &:after {
        height: 1.3rem
      }
    }
  }

  @media(max-width: 767px) {
    font-size: 2rem;
  }
`
export default (props) =>
  <TitleContainer>
    <Heading>{props.children}</Heading>
  </TitleContainer>
