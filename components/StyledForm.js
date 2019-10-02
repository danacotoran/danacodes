import styled from 'styled-components'

const StyledMessage = styled.p`
  @keyframes StyledMessageSlideIn {
    0% {
      bottom: -5rem;
    }
    100% {
      bottom: 0rem;
    }
  }
  box-sizing: border-box;
  background-color: ${props => props.background};
  color: ${({ theme }) => theme.colours.background};
  position: fixed;
  bottom: -5rem;
  margin: 0;
  padding: 2rem;
  @media (max-width: 767px) {
    padding: 1rem;
  }
  width: 100%;
  text-align: center;
  left: 0;
  animation: StyledMessageSlideIn .3s ease-in-out forwards;
`

const ErrorMessage = (props) => props.error.length ?  <StyledMessage background={({ theme }) => theme.colours.error}> {props.error} </StyledMessage> : ''
const SuccessMessage = (props) => props.success.length ?  <StyledMessage background={({ theme }) => theme.colours.success}> {props.success} </StyledMessage> : ''

const StyledLabel = styled.label`
  margin-bottom: .25rem;
  display: block;
`
const StyledInput = styled.input`
  font-size: 1em;
  margin-bottom: 1rem;
  padding: .5rem .25rem;
  width: 100%;
  display: block;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colours.grey};
  box-sizing: border-box;
`
const StyledTextarea = styled.textarea`
  font-size: 1em;
  margin-bottom: 1rem;
  padding: .5rem .25rem;
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colours.grey};
`
const StyledBtn = styled.input`
  letter-spacing: .1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colours.accent};
  cursor: pointer;
  transition: background-color .3s ease-in-out;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin: 3rem auto;
  display: block;
  padding: 1rem 2rem;
  border-radius: 0;
  border: none;
  box-shadow: 3px 3px rgba(0,0,0,0.2);
  text-shadow: 2px 2px rgba(0,0,0,0.2);
  &:disabled {
    background-color: ${({ theme }) => theme.colours.grey};
    cursor: not-allowed;
  }
  &:active {
    box-shadow: none;
  }
`
const StyledCheckbox = styled.input`
    height: 1rem;
    margin-right: .5rem;
`

export const StyledFormElements = { ErrorMessage, SuccessMessage, StyledCheckbox, StyledBtn, StyledTextarea, StyledLabel, StyledInput }
