import decode from 'decode-html'

export default props => {
  return (
    <div>
      <h2 className="component-title" id="rich-text">
        Rich Text
      </h2>
      <div className="rich-text">
        <div
          className="rich-text__inner"
          dangerouslySetInnerHTML={{ __html: decode(props.data.body) }}
        />
      </div>
    </div>
  )
}
