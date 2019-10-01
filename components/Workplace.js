import styled from 'styled-components'
import { StyledSection } from '../components/LayoutElements'

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
  font-size: 1.5rem;
  span:first-child {
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 2px 2px rgba(0,0,0,0.1);
  }
  @media (max-width: 480px) {
    font-size: 1rem;
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
        <span> {props.company} </span> /
        <span> {props.location} </span> /
        <span> {props.timeframe} </span> </WorkplaceHeading>
      <p>
        {props.company} is {props.companyDesc}. <br />
        {phraseRandomiser(props.company)} <JobRole>{props.role}</JobRole>.
      </p>
    </WorkplaceContainer>
  )

}

export default Workplace
