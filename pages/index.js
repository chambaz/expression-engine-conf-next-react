// import deps
import 'isomorphic-fetch'
import React from 'react'
import Head from 'next/head'

// import components
import StyleguideNav from '../components/styleguide-nav'
import CtaPanel from '../components/cta-panel'
import ImageCopy from '../components/image-copy'
import Quote from '../components/quote'
import RichText from '../components/rich-text'
import ContactForm from '../components/contact-form'
import TeamMembers from '../components/team-members'

// EE API url
const apiUrl = 'http://component-design.ac.dsdev/pages-json/ui'

// base component
export default class extends React.Component {
  // fetch JSON component data from EE API
  static async getInitialProps() {
    const res = await fetch(apiUrl)
    const json = await res.json()
    return json
  }

  constructor(props) {
    super(props)

    // set component data on state
    // to re-render UI on update
    this.state = this.props

    // update component data every second
    setInterval(() => {
      this.update()
    }, 1000)
  }

  // fetch JSON component data from EE API
  // and update component state
  async update() {
    const res = await fetch(apiUrl)
    const json = await res.json()
    this.setState({ components: json.components })
  }

  render() {
    let components = []

    // build array of components and pass data as props
    this.state.components.forEach((component, i) => {
      if (component.name === 'cta-panel') {
        components.push(<CtaPanel key={i} data={component.data} />)
      } else if (component.name === 'image-copy') {
        components.push(<ImageCopy key={i} data={component.data} />)
      } else if (component.name === 'quote') {
        components.push(<Quote key={i} data={component.data} />)
      } else if (component.name === 'rich-text') {
        components.push(<RichText key={i} data={component.data} />)
      } else if (component.name === 'team-members') {
        components.push(<TeamMembers key={i} data={component.data} />)
      } else if (component.name === 'contact-form') {
        components.push(<ContactForm key={i} data={component.data} />)
      }
    })

    return (
      <div>
        <Head>
          <title>Component Design React</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="http://component-design.ac.dsdev/dist/style.css"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/static/favicon.png"
            type="image/x-icon"
          />
        </Head>
        <div>
          <h1 className="components-title">Styleguide</h1>
          <StyleguideNav />
          {components}
        </div>
      </div>
    )
  }
}
