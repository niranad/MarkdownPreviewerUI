export const Editor = ({ input, handleChange }) => {
  return (
    <div id="editor-div">
      <div className="head">
        <span id="editor-toggle">&times;</span>
        <header>Editor</header>
      </div>
      <textarea
        id="editor"
        value={input}
        onChange={handleChange}
        name="markdown"
        cols="30"
        rows="10"
      />
    </div>
  )
}
