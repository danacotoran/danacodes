import { Component } from 'react'
import { StyledSection, StyledMain, StyledHeader } from '../components/LayoutElements'
import { StyledLabel, ErrorMessage, StyledInput, StyledTextarea, StyledBtn, SuccessMessage } from '../components/StyledForm'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false,
      name: '',
      message: '',
      email: '',
      error:''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleEmailChange(e) {
     this.setState({email: e.target.value});
  }
  handleMessageChange(e) {
     this.setState({message: e.target.value});
  }
  handleNameChange(e) {
     this.setState({name: e.target.value});
  }
  submitForm () {
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.text().then((responseText) => {
        res.status === 200
          ? this.setState({ submitted: true, submitting: false, error: '' })
          : (res.status === 400
            ? this.setState({ submitted: false, error: responseText, submitting: false })
            : this.setState({error: "Sorry, your message can not be sent at this time. Please return later!"}))
      })
    })
  }

  render() {
    const {submitting, submitted, error} = this.state
    return(
      <React.Fragment>
        <StyledHeader>Get in touch</StyledHeader>
        <StyledMain>
          <StyledSection>
            <ErrorMessage error={error} />
            <SuccessMessage success={submitted === true ? 'Thanks, your message has been sent' : ''}/>
            <form method="POST" action="/api/contact" onSubmit={e => {
                  e.preventDefault()
                  this.submitForm()
                }}>
              <StyledLabel htmlFor="name">
                Name
              </StyledLabel>
              <StyledInput
                type="text"
                name="name"
                autoFocus={true}
                value={this.state.name}
                onChange={this.handleNameChange} />

              <StyledLabel htmlFor="email" >
                Email
              </StyledLabel>
              <StyledInput
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}/>

              <StyledLabel htmlFor="message" >
                Message
              </StyledLabel>
              <StyledTextarea
                name="message"
                rows="6"
                maxLength="1000"
                value={this.state.message}
                onChange={this.handleMessageChange} />
              <StyledBtn type="submit"
                    value={(submitting === true) ? 'Sending' : ((submitted === true) ? 'Sent!' : 'Send!')} />
            </form>
          </StyledSection>
        </StyledMain>
      </React.Fragment>
    )
  }
}


export default Contact;
