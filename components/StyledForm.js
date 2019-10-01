import styled from 'styled-components'

// styled components
const StyledError = styled.p`
  color: tomato;
`
const StyledSuccess = styled.p`
  color: darkcyan;
`

// named exports
export const StyledLabel = styled.label`
  margin-bottom: .25rem;
  display: block;
`

export const StyledInput = styled.input`
  font-size: 1em;
  margin-bottom: 1rem;
  padding: .5rem .25rem;
  width: 100%;
  display: block;
  box-shadow: none;
  border: 1px solid #666;
  box-sizing: border-box;
`
export const StyledTextarea = styled.textarea`
  font-size: 1em;
  margin-bottom: 1rem;
  padding: .5rem .25rem;
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: 1px solid #666;
`
export const StyledBtn = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: darkcyan;
  transition: background-color .3s ease-in-out;
  color: white;
  font-size: 1em;
  margin: 3rem auto;
  display: block;
  padding: 1rem 2rem;
  border-radius: none;
  box-shadow: none;
  border: none;
  outline: none;
  &:disabled {
    background-color: #999;
  }
`
export const StyledCheckbox = styled.input`
    height: 1rem;
    margin-right: .5rem;
`
export const ErrorMessage = (props) => props.error.length ?  <StyledError> {props.error} </StyledError> : ''
export const SuccessMessage = (props) => props.success.length ?  <StyledSuccess> {props.success} </StyledSuccess> : ''
