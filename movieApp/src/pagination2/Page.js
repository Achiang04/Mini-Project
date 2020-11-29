import Pagination from './Pagination';
import React, {useState} from 'react';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const {pagination} = Pagination({
    numberOfArticles: 223,
    articlesPerPage: 12,
    numberOfButtons: 8,
    currentPage,
  });

  const handleClick = (page) => setCurrentPage(page);

  return (
    <div className="pagination">
      <ul>
        <li
          className={`${pagination[0] === currentPage && 'disabled'}`}
          onClick={handleClick.bind(null, currentPage - 1)}>
          Prev
        </li>
        {pagination.map((page) => (
          <li
            className={`${currentPage === page && 'active'}`}
            onClick={handleClick.bind(null, page)}>
            {page}
          </li>
        ))}
        <li
          className={`${pagination.reverse()[0] === currentPage && 'disabled'}`}
          onClick={handleClick.bind(null, currentPage + 1)}>
          Next
        </li>
      </ul>
    </div>
  );
}
