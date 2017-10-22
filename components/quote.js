export default props => {
  return (
    <div>
      <h2 className="component-title" id="quote">
        Quote
      </h2>
      <blockquote className="quote">
        <p className="quote__body">{props.data.body}</p>
        <p className="quote__author">– {props.data.author}</p>
      </blockquote>
    </div>
  )
}
