import React from 'react'
import Head  from 'next/head'
import Link from 'next/link'
import Title from '../components/Title'
import { ExternalLinkIcon } from '../components/svg'
import StyledLink, {HomeLink} from '../components/StyledLink'
import {StyledLI, StyledUL} from '../components/StyledLists'
import {StyledSection, StyledMain, StyledHeader} from '../components/LayoutElements'

export default () => (
  <React.Fragment>
    <Head>
      <title>Dana Codes</title>
    </Head>
    <StyledHeader>Hello World</StyledHeader>
    <StyledMain>
      <StyledSection>
        <p>I am Dana, a front end developer based in London, UK.</p>
      </StyledSection>
      <StyledSection>
        <StyledUL>
          <StyledLI>
            <Link href="/experience" passHref>
              <StyledLink>My work experience</StyledLink>
            </Link>
          </StyledLI>
          <StyledLI>
            The <StyledLink href="https://github.com/danacotoran/danacodes" target="_blank">source code <ExternalLinkIcon /></StyledLink> for this website
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
