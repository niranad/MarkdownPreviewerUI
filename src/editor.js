export const Editor = ({ input, handleChange, isMaxView, editorToggler }) => {
  return (
    <div id='editor-div'>
      <div className='head'>
        <span
          id='editor-toggle'
          style={{ border: 'none' }}
          onClick={editorToggler}
        >
          <i
            className={
              isMaxView ? 'fa-solid fa-minimize' : 'fa-solid fa-maximize'
            }
          />
        </span>
        <header>Editor</header>
      </div>
      <textarea
        id='editor'
        value={input}
        onChange={handleChange}
        name='markdown'
        cols='30'
        rows='10'
      />
    </div>
  );
};
