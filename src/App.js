import React from 'react'
import { Preview } from './preview'
import { Editor } from './editor'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      editorMaxView: false,
      previewMaxView: false,
    }
  }

  toggleEditor() {
    this.setState((state) => ({ editorMaxView: !state.editorMaxView }))
    if (this.state.editorMaxView) {
      document.getElementById('editor-div').style.width = '100vw'
      document.getElementById('editor-div').style.height = '100vh'
    } else {
      document.getElementById('editor-div').style.height = '40vh'
    }
  }

  togglePreview() {
    this.setState((state) => ({ previewMaxView: !state.previewMaxView }))
    if (this.state.previewMaxView) {
      document.getElementById('preview-div').style.width = '100vw'
      document.getElementById('preview-div').style.height = '100vh'
    } else {
      document.getElementById('preview-div').style.top = '4vh'
    }
  }

  componentDidMount() {
    const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's a smaller sub-heading...

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is a multiline code:                                                               
                                                                                           
function anotherExample(firstLine, lastLine) {                                             
  if (firstLine =='\`\`\`' && lastLine == '\`\`\`') {                                            
    return multiLineCode;                                                                  
  }                                                                                        
}                                                                                          
\`\`\`

You can also make text **bold**... whoa!                                                     
Or _italic_.                                                                                       
Or... wait a minute... **_both!_**.                                                          
And you can cross stuff out ~~sorry, made a mistake~~.

There's also [links](https://www.codepen.io/niranad), and
> Block Quotes!

And if you want to get really creative, event tables:

Wild Header | Crazy Header | Another Header
------------ | ----------------| --------------
Your content can | be here and it | can be here
And here. | Okay | I think we get it.

- And of course there are lists
  - Some are bulleted
    - With different identation levels.
      - That look like this.

1. And there are numbered lists too.
2. Second list.
3. That's enough! Let's not forget images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

    this.setState({
      input: defaultMarkdown,
    })
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    })

    document
      .getElementById('preview-toggle')
      .addEventListener('click', this.togglePreview)
    document
      .getElementById('editor-toggle')
      .addEventListener('click', this.toggleEditor)
  }

  componentWillUnmount() {
    document
      .getElementById('preview-toggle')
      .removeEventListener('click', this.togglePreview)
    document
      .getElementById('editor-toggle')
      .removeEventListener('click', this.toggleEditor)
  }

  render() {
    return (
      <div className="container-div">
        <Editor
          input={this.state.input}
          handleChange={this.handleChange.bind(this)}
        />
        <Preview input={this.state.input} />
      </div>
    )
  }
}

export default App
