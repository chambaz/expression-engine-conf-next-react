export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  // update active boolean on state
  activate(e) {
    e.preventDefault()
    this.setState({
      active: !this.state.active
    })
  }

  // display menu based on active boolean
  render() {
    let classes = 'styleguide-nav'

    if (this.state.active) {
      classes += ' styleguide-nav--active'
    }

    return (
      <div className={classes}>
        <a
          onClick={e => this.activate(e)}
          className="styleguide-nav__hamburger"
          href="#">
          <img
            className="styleguide-nav__hamburger-img"
            src="http://component-design.ac.dsdev/img/hamburger.svg"
          />
        </a>

        <ul className="styleguide-nav__list">
          <li className="styleguide-nav__item">
            <a className="styleguide-nav__link" href="#rich-text">
              Rich Text
            </a>
          </li>
          <li className="styleguide-nav__item">
            <a className="styleguide-nav__link" href="#cta-pane">
              CTA Panel
            </a>
          </li>
          <li className="styleguide-nav__item">
            <a className="styleguide-nav__link" href="#image-copy">
              Image Copy
            </a>
          </li>
          <li className="styleguide-nav__item">
            <a className="styleguide-nav__link" href="#quote">
              Quote
            </a>
          </li>
          <li className="styleguide-nav__item">
            <a className="styleguide-nav__link" href="#team-members">
              Team Members
            </a>
          </li>
          <li className="styleguide-nav__item">
            <a className="styleguide-nav__link" href="#contact-form">
              Contact Form
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
