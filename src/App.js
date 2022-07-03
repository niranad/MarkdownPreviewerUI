import React from 'react';
import { Preview } from './preview';
import { Editor } from './editor';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      editorMaxView: false,
      previewMaxView: false,
    };
  }

  toggleEditor = () => {
    if (!this.state.editorMaxView) {
      document.querySelector('#editor-div').style.width = '95vw';
      document.querySelector('#editor-div').style.height = '95vh';
    } else {
      let editorStyle = document.querySelector('#editor-div').style;

      if (window.innerWidth >= 1367) {
        editorStyle.width = '50vw';
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1366) {
        editorStyle.width = '45vw';
      } else if (window.innerWidth > 880 && window.innerWidth <= 1024) {
        editorStyle.width = '50vw';
      } else if (window.innerWidth > 640 && window.innerWidth <= 880) {
        editorStyle.width = '57vw';
      } else if (window.innerWidth > 500 && window.innerWidth <= 640) {
        editorStyle.width = '65vw';
      } else {
        editorStyle.width = '75vw';
      }

      document.querySelector('#editor-div').style.height = '40vh';
    }
    this.setState((state) => ({ editorMaxView: !state.editorMaxView }));
  };

  togglePreview = () => {
    if (!this.state.previewMaxView) {
      document.querySelector('#preview-div').style.width = '97vw';
      document.querySelector('#preview-div').style.height = '97vh';
    } else {
      let prevStyle = document.querySelector('#preview-div').style;

      if (window.innerWidth >= 1367) {
        prevStyle.width = '70vw';
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1366) {
        prevStyle.width = '65vw';
      } else if (window.innerWidth > 880 && window.innerWidth <= 1024) {
        prevStyle.width = '75vw';
      } else if (window.innerWidth > 640 && window.innerWidth <= 880) {
        prevStyle.width = '80vw';
      } else if (window.innerWidth > 500 && window.innerWidth <= 640) {
        prevStyle.width = '85vw';
      } else {
        prevStyle.width = '92vw';
      }
    }

    this.setState((state) => ({ previewMaxView: !state.previewMaxView }));
  };

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

![React Logo w/ Text](https://goo.gl/Umyytc)`;

    this.setState({
      input: defaultMarkdown,
    });
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div className='container-div'>
        <Editor
          input={this.state.input}
          handleChange={this.handleChange}
          isMaxView={this.state.editorMaxView}
          editorToggler={this.toggleEditor}
        />
        <Preview
          input={this.state.input}
          isMaxView={this.state.previewMaxView}
          previewToggler={this.togglePreview}
        />
      </div>
    );
  }
}

export default App;

