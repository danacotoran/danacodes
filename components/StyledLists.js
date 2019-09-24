import styled from 'styled-components'

const StyledListItem = styled.li`
  margin-bottom: 1rem;
`
const StyledUnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
export const StyledUL = (props) => <StyledUnorderedList>{props.children}</StyledUnorderedList>
export const StyledLI = (props) => <StyledListItem>{props.children}</StyledListItem>
