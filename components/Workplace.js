import styled from 'styled-components'
import { StyledSection } from '../components/LayoutElements'
import { CalendarIcon, WorkIcon, MapPinIcon} from '../components/svg'

const WorkplaceContainer = styled.section`
  margin: 0 1rem 2rem;
`
const JobRole = styled.b`
  text-transform: uppercase;
`
const WorkplaceHeading = styled.h2`
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.typography.baseSubtitleFontSize};
  span {
    &:first-child {
      text-transform: uppercase;
      font-weight: bold;
      text-shadow: 2px 2px ${({ theme }) => theme.colours.shadow};
    }
    &:nth-child(2), &:nth-child(3)  {
      &:before {
        content: '|'
      }
    }
    @media(max-width: 767px) {
      display: block;
      &:nth-child(2), &:nth-child(3) {
        &:before {
          content: none;
        }
      }
    }
  }

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.typography.baseFontSizeMobile};
    margin-bottom: .5rem;
}
`

const Workplace = (props) => {
  const phraseRandomiser = (companyName) => {
    const phrases = [
      `I joined ${companyName} as a`,
      "I worked there as a",
      `I worked at ${companyName} as a`
    ]
    return phrases[Math.floor(Math.random() * phrases.length)];
  }
  return (
    <WorkplaceContainer>
      <WorkplaceHeading>
        <span> <WorkIcon /> {props.company} </span>
        <span> <MapPinIcon /> {props.location} </span>
        <span> <CalendarIcon /> {props.timeframe} </span> </WorkplaceHeading>
      <p>
        {props.company} is {props.companyDesc}. <br />
        {phraseRandomiser(props.company)} <JobRole>{props.role}</JobRole>.
      </p>
    </WorkplaceContainer>
  )

}

export default Workplace
