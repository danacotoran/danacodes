import Link from 'next/link'
import Head from 'next/head'
import {StyledSection, StyledMain, StyledHeader} from '../components/LayoutElements'
import { StyledUL, StyledLI} from '../components/StyledLists'
import StyledLink from '../components/StyledLink'
import Workplace from '../components/Workplace'

export default () => (
  <React.Fragment>
    <Head>
      <title>Work experience</title>
    </Head>
    <StyledHeader>My experience</StyledHeader>
    <StyledMain>
      <StyledUL>
        <StyledLI>
          <Workplace
            company="Harrods"
            location="London"
            timeframe="November 2017 - May 2019"
            companyDesc="one of the world’s most prominent luxury department stores"
            role="Ui Developer"/>
        </StyledLI>
      <StyledLI>
          <Workplace
            company="SpareRoom"
            location="London"
            timeframe="November 2015 - June 2017"
            companyDesc="the UK’s leading flat sharing website"
            role="Front End Developer"/>
        </StyledLI>
        <StyledLI>
          <Workplace
            company="Read Forward"
            location="Bucharest"
            timeframe="April 2014 - July 2015"
            companyDesc="a digital agency with a focus on education technology"
            role="Developer"/>
        </StyledLI>
      </StyledUL>
      <Link href="/contact" passHref>
        <StyledLink>Contact me for a full CV</StyledLink>
      </Link>
    </StyledMain>
  </React.Fragment>
)
