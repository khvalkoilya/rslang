import React, { useState, useContext } from 'react';
import ApplicationData from '../../../context/Context';

import WordCardsShortinfo from '../wordCardsShortInfo/WordCardsShortinfo';
import Pagination from '../../../pagination/Pagination';

const DeleteWords = () => {
  const { wordsDelete } = useContext(ApplicationData);
  const [aggregatedWordsDelete, setAggregatedWordsDelete] = useState(wordsDelete);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = aggregatedWordsDelete.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const arrWordsCard = currentPosts.map((e) => (
    <WordCardsShortinfo
      element={e}
      key={e.id}
      currentArr={aggregatedWordsDelete}
      currentWords={setAggregatedWordsDelete}
    />
  ));
  return (
    <div>
      {arrWordsCard}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={aggregatedWordsDelete.length}
        paginate={paginate}
      />
    </div>
  );
};

export default DeleteWords;
