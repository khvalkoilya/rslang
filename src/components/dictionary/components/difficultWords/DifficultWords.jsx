import React, { useState, useContext } from 'react';
import ApplicationData from '../../../context/Context';

import WordCardsShortinfo from '../wordCardsShortInfo/WordCardsShortinfo';
import Pagination from '../../../pagination/Pagination';

const DifficultWords = () => {
  const { wordsComplicated, setWordsComplicated } = useContext(ApplicationData);
  const [aggregatedWordsComplicated, setAggregatedWordsComplicated] = useState(wordsComplicated);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = aggregatedWordsComplicated.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const arrWordsCard = currentPosts.map((e) => (
    <WordCardsShortinfo
      element={e}
      key={e.word}
      currentArr={aggregatedWordsComplicated}
      currentWords={setAggregatedWordsComplicated}
      setWordsDeleteAndComplicated={setWordsComplicated}
    />
  ));
  return (
    <div>
      {arrWordsCard}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={aggregatedWordsComplicated.length}
        paginate={paginate}
      />
    </div>
  );
};

export default DifficultWords;
