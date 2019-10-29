import { Component } from 'react'
import Head from 'next/head'
import { StyledSection, StyledMain, StyledHeader } from '../components/LayoutElements'
import { StyledFormElements } from '../components/StyledForm'


class Contact extends Component {
  static async getInitialProps({ query }) {
    return ({ query })
  }
  state = {
    submitting: false,
    submitted: false,
    consented: '',
    name: '',
    message: '',
    email: '',
    error:'',
    jsOn: false
  }
  componentDidMount() {
    if(!this.state.jsOn) {
      this.setState({jsOn: true})
    }
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
    this.state.submitted && this.setState({submitted: false})
  }
  handleMessageChange = (e) => {
    this.setState({message: e.target.value});
    this.state.submitted && this.setState({submitted: false})
  }
  handleNameChange = (e) => {
    this.setState({name: e.target.value});
    this.state.submitted && this.setState({submitted: false})
  }
  handleConsentChange = (e) => {
    this.setState({consented: e.target.checked})
    this.state.submitted && this.setState({submitted: false})
  }
  submitForm = () => {
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
              consented: false,
            })
          : (res.status === 400
            ? this.setState({
                submitted: false,
                error: responseText,
                submitting: false,
              })
            : this.setState({
                error: "Sorry, your message can not be sent at this time. Please try again later!",
                submitted: false,
                submitting: false,
              }))
      })
    })
  }

  render() {
    const {submitting, submitted, error, email, message, name, consented, jsOn} = this.state,
          queryOutcome = this.props.query && this.props.query.outcome
    return(
      <React.Fragment>

        <Head>
          <title>Contact me</title>
        </Head>
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
                value={name}
                onChange={this.handleNameChange} />

              <StyledFormElements.StyledLabel htmlFor="email" >
                Email
              </StyledFormElements.StyledLabel>
              <StyledFormElements.StyledInput
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleEmailChange}/>

              <StyledFormElements.StyledLabel htmlFor="message" >
                Message
              </StyledFormElements.StyledLabel>
              <StyledFormElements.StyledTextarea
                name="message"
                id="message"
                rows="6"
                maxLength="1000"
                value={message}
                onChange={this.handleMessageChange} />
              <StyledFormElements.StyledLabel htmlFor="consented" >
                <StyledFormElements.StyledCheckbox
                  onChange={this.handleConsentChange}
                  type="checkbox"
                  name="consented"
                  checked={consented}
                  id="consented"/>
                I agree to be contacted in response to my message
              </StyledFormElements.StyledLabel>
              <StyledFormElements.ErrorMessage error={
                error ? error
                  : (queryOutcome == "error" ? "Sorry, your message can not be sent at this time. Please try again later!"
                    : (queryOutcome == "incomplete" ? "Please ensure all the fields are filled in"
                      : ''))
              } />
              <StyledFormElements.SuccessMessage success={submitted === true || queryOutcome == "success" ? 'Thanks, your message has been sent' : ''}/>
              <StyledFormElements.StyledBtn
                disabled={!jsOn || (email && message && name && consented && !submitting) ? false : true}
                type="submit"
                value={(submitting === true) ? 'Sending...' : 'Send!'} />
            </form>
          </StyledSection>
        </StyledMain>
      </React.Fragment>
    )
  }
}


export default Contact;
