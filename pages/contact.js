import { Component } from 'react'
import { StyledSection, StyledMain, StyledHeader } from '../components/LayoutElements'
import { StyledFormElements } from '../components/StyledForm'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false,
      consented: '',
      name: '',
      message: '',
      email: '',
      error:''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleConsentChange = this.handleConsentChange.bind(this);
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
  handleConsentChange(e) {
    this.setState({consented: e.target.checked})
  }
  submitForm () {
    this.setState({ submitting: true })
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
          ? this.setState({
              submitted: true,
              submitting: false,
              error: '',
              email: '',
              name: '',
              message: '',
              checkbox: ''
            })
          : (res.status === 400
            ? this.setState({
                submitted: false,
                error: responseText,
                submitting: false
              })
            : this.setState({
                error: "Sorry, your message can not be sent at this time. Please return later!",
                submitted: false,
                submitting: false
              }))
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
            <form method="POST" action="/api/contact" onSubmit={e => {
                  e.preventDefault()
                  this.submitForm()
                }}>
              <StyledFormElements.StyledLabel htmlFor="name">
                Name
              </StyledFormElements.StyledLabel>
              <StyledFormElements.StyledInput
                type="text"
                id="name"
                name="name"
                autoFocus={true}
                value={this.state.name}
                onChange={this.handleNameChange} />

              <StyledFormElements.StyledLabel htmlFor="email" >
                Email
              </StyledFormElements.StyledLabel>
              <StyledFormElements.StyledInput
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}/>

              <StyledFormElements.StyledLabel htmlFor="message" >
                Message
              </StyledFormElements.StyledLabel>
              <StyledFormElements.StyledTextarea
                name="message"
                id="message"
                rows="6"
                maxLength="1000"
                value={this.state.message}
                onChange={this.handleMessageChange} />
              <StyledFormElements.StyledLabel htmlFor="consent" >
                <StyledFormElements.StyledCheckbox
                  onChange={this.handleConsentChange}
                  type="checkbox"
                  name="consent"
                  value={this.state.consented}
                  id="consent"/>
                I agree to be contacted in response to my message
              </StyledFormElements.StyledLabel>
              <StyledFormElements.ErrorMessage error={error} />
              <StyledFormElements.SuccessMessage success={submitted === true ? 'Thanks, your message has been sent' : ''}/>
              <StyledFormElements.StyledBtn
                disabled={this.state.email && this.state.message && this.state.name && this.state.consented ? false : true}
                type="submit"
                value={(submitting === true) ? 'Sending...' : ((submitted === true) ? 'Sent!' : 'Send!')} />
            </form>
          </StyledSection>
        </StyledMain>
      </React.Fragment>
    )
  }
}


export default Contact;
