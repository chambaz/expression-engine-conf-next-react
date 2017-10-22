import decode from 'decode-html'

export default props => {
  let classes = 'cta-panel'

  if (props.data.fullScreen === '1') {
    classes += ' cta-panel--full-screen'
  }

  let url = `url(${props.data.backgroundImage})`

  return (
    <div>
      <h2 className="component-title" id="cta-panel">
        CTA Panel
      </h2>
      <div className={classes} style={{ backgroundImage: url }}>
        <div className="cta-panel__inner">
          <h2 className="cta-panel__heading">{props.data.heading}</h2>
          <div
            className="cta-panel__body"
            dangerouslySetInnerHTML={{ __html: decode(props.data.body) }}
          />
          <a className="button cta-panel__button" href="{props.buttonUrl}">
            {props.data.buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}
