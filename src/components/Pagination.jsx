"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Pagination = ({ totalPages }) => {
  const router = useRouter();

  useEffect(() => {
    const { genre, pageNumber } = router.query;
    router.push(`/?genre=${genre || 'topRated'}&pageNumber=${pageNumber || 1}`);
  }, [router.query]);

  const handlePageChange = (newPageNumber) => {
    const { genre } = router.query;
    router.push(`/?genre=${genre || 'topRated'}&pageNumber=${newPageNumber}`);
  };

  const renderPageNumbers = () => {
    const { pageNumber } = router.query;
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={pageNumber == i ? 'active' : ''}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <ul className="pagination">
      {renderPageNumbers()}
    </ul>
  );
};

export default Pagination;
