import decode from 'decode-html'

export default props => {
  let classes = 'image-copy__inner'

  if (props.data.direction) {
    classes += ` image-copy__inner--${props.data.direction}`
  }
  return (
    <div>
      <h2 className="component-title" id="image-copy">
        Image Copy
      </h2>
      <div className="image-copy">
        <div className={classes}>
          <div className="image-copy__image">
            <img className="image-copy__img" src={props.data.image} />
          </div>
          <div
            className="image-copy__copy"
            dangerouslySetInnerHTML={{ __html: decode(props.data.copy) }}
          />
        </div>
      </div>
    </div>
  )
}
