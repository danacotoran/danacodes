import {Component} from 'react'
import {StyledSection, StyledMain, StyledHeader} from '../components/LayoutElements'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false,
      name: '',
      message: '',
      email: ''
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
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : ''
    })
  }

  render() {
      return(
        <React.Fragment>
          <StyledHeader>Get in touch</StyledHeader>
          <StyledMain>
              <form method="POST" action="/api/contact" onSubmit={e => {
                    e.preventDefault()
                    // console.log(this)
                    // console.log(e)
                    this.submitForm()
                  }}>
                <label htmlFor="name">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleNameChange} />

                <label htmlFor="email" >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}/>

                <label htmlFor="message" >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleMessageChange} />
                <input type="submit" />
              </form>
          </StyledMain>
        </React.Fragment>
      )
  }
}


export default Contact;
