import React from 'react';

const StartPageSpeakIt = () => (
  <div className="main">
    <div className="intro">
      <h1 className="name__game">SPEAKIT</h1>
      <p className="description__game">
        Нажмите на слово и прослушайте произношение.
        <br />
        Нажмите на кнопку &quot;Проговорить&quot; и скажите слово в микрофон.
      </p>
      <button
        type="button"
        className="btn__start"
        // onClick={useCallback(() => {
        //   setPage(id);
        // })}
      >
        СТАРТ
      </button>
    </div>
  </div>
);

export default StartPageSpeakIt;
