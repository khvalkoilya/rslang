import React, {
  useState, useContext,
} from 'react';
import ApplicationData from '../../../context/Context';

import WordCards from '../wordCardsFullInfo/WordCards';
import Pagination from '../../../pagination/Pagination';

const LearnedWords = () => {
  const {
    setWords, setPage, wordsNew, wordsAgain, setDoneCards,
  } = useContext(ApplicationData);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const wordsArrFull = wordsAgain.concat(wordsNew).slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const filterAgainWords = () => wordsAgain.concat(wordsNew).filter((element) => (
  //   element.userWord.optional.repeat !== 0));

  // const filterNewWords = () => wordsAgain.concat(wordsNew).filter((element) => (
  //   element.userWord.optional.repeat === 0));

  return (
    <div>
      <div className="buttonsInLearnedWords">
        <button
          type="button"
          className="btn btnInLearned"
          onClick={(e) => {
            if (wordsAgain.concat(wordsNew).length !== 0) {
              setWords(wordsAgain.concat(wordsNew));
              setPage('train');
            } else {
              e.preventDefault();
            }
          }}
        >
          Все
        </button>
        <button
          type="button"
          className="btn btnInLearned"
          onClick={(e) => {
            if (wordsAgain.length !== 0) {
              setWords(wordsAgain);
              setPage('train');
            } else {
              e.preventDefault();
            }
          }}
        >
          Повторить
        </button>
        <button
          type="button"
          className="btn btnInLearned"
          onClick={(e) => {
            if (wordsNew.length !== 0) {
              setWords(wordsNew);
              setPage('train');
              setDoneCards(0);
            } else {
              e.preventDefault();
            }
          }}
        >
          Новые
        </button>
      </div>
      <div>
        {wordsArrFull.map((e) => (
          <WordCards
            element={e}
            key={e.id}
            optional={e.userWord.optional}
          />
        ))}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={wordsAgain.concat(wordsNew).length}
          paginate={paginate}
        />
      </div>
    </div>

  );
};

export default LearnedWords;
