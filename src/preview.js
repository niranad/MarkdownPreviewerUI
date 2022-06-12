import marked from 'marked'

export const Preview = ({ input, isMaxView, previewToggler }) => {
  const getMarkdownText = () => {
    var rawMarkup = marked(input, { sanitize: true, gfm: true, breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div id='preview-div'>
      <div className='head'>
        <span
          id='preview-toggle'
          style={{ border: 'none' }}
          onClick={previewToggler}
        >
          <i
            className={
              isMaxView ? 'fa-solid fa-minimize' : 'fa-solid fa-maximize'
            }
          />
        </span>
        <header>Preview</header>
      </div>
      <div id='preview' dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
};
