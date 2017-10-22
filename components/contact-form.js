import decode from 'decode-html'

export default class extends React.Component {
  constructor(props) {
    super(props)

    // build initial state object
    this.state = {
      firstName: {
        value: '',
        userInput: false,
        valid: false
      },
      lastName: {
        value: '',
        userInput: false,
        valid: false
      },
      email: {
        value: '',
        userInput: false,
        valid: false
      },
      message: {
        value: '',
        userInput: false,
        valid: false
      }
    }
  }

  // on submit mark each field as having user interaction
  // therefore showing error class if invalid
  submit(e) {
    e.preventDefault()
    this.setState({
      firstName: {
        userInput: true
      },
      lastName: {
        userInput: true
      },
      email: {
        userInput: true
      },
      message: {
        userInput: true
      }
    })
  }

  // show error classes if user has interacted and field is invalid
  // on keyup update value and validity
  // on focus set user input to true
  render() {
    return (
      <div>
        <h2 className="component-title" id="contact-form">
          Contact Form
        </h2>
        <div className="contact-form">
          <div className="contact-form__inner">
            <h2 className="contact-form__heading">{this.props.data.heading}</h2>
            <div
              className="contact-form__body"
              dangerouslySetInnerHTML={{ __html: decode(this.props.data.body) }}
            />
            <form className="contact-form__form">
              <ul className="contact-form__fields">
                <li className="contact-form__field contact-form__field--inline">
                  <input
                    className={
                      !this.state.firstName.userInput ||
                      this.state.firstName.valid
                        ? 'contact-form__input'
                        : 'contact-form__input contact-form__input--error'
                    }
                    type="text"
                    placeholder="First name"
                    onKeyUp={e => {
                      this.setState({
                        firstName: {
                          value: e.currentTarget.value,
                          valid: !!e.currentTarget.value.length
                        }
                      })
                    }}
                    onFocus={e => {
                      this.setState({
                        firstName: {
                          userInput: true
                        }
                      })
                    }}
                  />
                  <input
                    className={
                      !this.state.lastName.userInput ||
                      this.state.lastName.valid
                        ? 'contact-form__input'
                        : 'contact-form__input contact-form__input--error'
                    }
                    type="text"
                    placeholder="Last name"
                    onKeyUp={e => {
                      this.setState({
                        lastName: {
                          value: e.currentTarget.value,
                          valid: !!e.currentTarget.value
                        }
                      })
                    }}
                    onFocus={e => {
                      this.setState({
                        lastName: {
                          userInput: true
                        }
                      })
                    }}
                  />
                </li>
                <li className="contact-form__field">
                  <input
                    className={
                      !this.state.email.userInput || this.state.email.valid
                        ? 'contact-form__input'
                        : 'contact-form__input contact-form__input--error'
                    }
                    type="email"
                    placeholder="Email"
                    onKeyUp={e => {
                      this.setState({
                        email: {
                          value: e.currentTarget.value,
                          valid:
                            e.currentTarget.value &&
                            e.currentTarget.value.match(/.+@.+\..+/)
                        }
                      })
                    }}
                    onFocus={e => {
                      this.setState({
                        email: {
                          userInput: true
                        }
                      })
                    }}
                  />
                </li>
                <li className="contact-form__field">
                  <textarea
                    className={
                      !this.state.message.userInput || this.state.message.valid
                        ? 'contact-form__input'
                        : 'contact-form__input contact-form__input--error'
                    }
                    rows="6"
                    placeholder="Message"
                    onKeyUp={e => {
                      this.setState({
                        message: {
                          value: e.currentTarget.value,
                          valid: !!e.currentTarget.value
                        }
                      })
                    }}
                    onFocus={e => {
                      this.setState({
                        message: {
                          userInput: true
                        }
                      })
                    }}
                  />
                </li>
              </ul>
              <input
                className="button contact-form__submit"
                type="submit"
                onClick={e => this.submit(e)}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
