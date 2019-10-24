
import styled from 'styled-components'
import { Component } from 'react'

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
  font-size: ${({ theme }) => theme.typography.baseTitleFontSize};
  position: relative;
  margin-top: 0;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-family: 'Bandeins Strange Variable', -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  font-variation-settings: 'wght' 900;
  animation: stretchyHeading2 .3s ease-in-out forwards;
  text-shadow: 2px 2px ${({ theme }) => theme.colours.shadow};
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
    &.active {
      animation: stretchyHeading .3s ease-in-out forwards;
      &:after {
        height: 1.3rem
      }
    }
  }

  @media(max-width: 767px) {
    font-size: ${({ theme }) => theme.typography.baseTitleFontSizeMobile};
  }
`
export default class ReactTitle extends Component {
  state = { active: false }
  hoverTimer
  toggleActive = () => {
    clearTimeout(this.hoverTimer)
    this.hoverTimer = setTimeout(() => { this.setState({ active: true }) }, 300)
  }
  toggleInactive = () => {
    clearTimeout(this.hoverTimer)
    this.setState({ active: false })
  }
  render () {
    return(
      <TitleContainer>
        <Heading
          className={this.state.active ? "active" : ""}
          onMouseEnter={this.toggleActive}
          onMouseLeave={this.toggleInactive}>
          {this.props.children}
        </Heading>
      </TitleContainer>
    )
  }
}
