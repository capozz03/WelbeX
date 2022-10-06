import { UsePaginationReturn } from '../../hooks/usePagination'
import React, { FC } from 'react'
import './index.scss'

type TPaginationProps = { paginations: UsePaginationReturn }

const Pagination: FC<TPaginationProps> = ({ paginations }) => {
  const { nextPage, prevPage, page, gaps, setPage, totalPages } = paginations

  return (
    <div className="pagination">
      <p className="text">
        {page}/{totalPages}
      </p>
      <button onClick={prevPage} className={`page ${page === 1 && 'disabled'}`}>
        &larr;
      </button>
      <button
        onClick={() => setPage(1)}
        className={`page ${page === 1 && 'disabled'}`}
      >
        1
      </button>
      {gaps.before ? '...' : null}
      {gaps.paginationGroup.map((el) => (
        <button
          onClick={() => setPage(el)}
          key={el}
          className={`page ${page === el ? 'active' : ''}`}
        >
          {el}
        </button>
      ))}
      {gaps.after ? '...' : null}
      <button
        onClick={() => setPage(totalPages)}
        className={`page ${page === totalPages && 'disabled'}`}
      >
        {totalPages}
      </button>
      <button
        onClick={nextPage}
        className={`page ${page === totalPages && 'disabled'}`}
      >
        &rarr;
      </button>
    </div>
  )
}

export default Pagination
