import React from 'react'
import Title from '../components/Title'
import Link from 'next/link'
import StyledLink, {HomeLink} from '../components/StyledLink'
import {StyledLI, StyledUL} from '../components/StyledLists'
import {StyledSection, StyledMain, StyledHeader} from '../components/LayoutElements'

export default () => (
  <React.Fragment>
    <StyledHeader>Hello World</StyledHeader>
    <StyledMain>
      <StyledSection>
        <p>I am Dana.</p>
        <p>I am a front end developer.</p>
        <p>I live in London.</p>
        <StyledUL>
          <StyledLI>
            <Link href="/experience" passHref>
              <StyledLink>My work experience</StyledLink>
            </Link>
          </StyledLI>
          <StyledLI>
            The <StyledLink href="https://github.com/danacotoran/danacodes" target="_blank">source code</StyledLink> for this website
          </StyledLI>
          <StyledLI>
            <Link href="/contact" passHref>
              <StyledLink>Contact me</StyledLink>
            </Link>
          </StyledLI>
        </StyledUL>
      </StyledSection>
    </StyledMain>
  </React.Fragment>
)
