import marked from 'marked'

export const Preview = ({ input }) => {
  const getMarkdownText = () => {
    var rawMarkup = marked(input, { sanitize: true, gfm: true, breaks: true })
    return { __html: rawMarkup }
  }

  return (
    <div id="preview-div">
      <div className="head">
        <span id="preview-toggle">&times;</span>
        <header>Preview</header>
      </div>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  )
}
