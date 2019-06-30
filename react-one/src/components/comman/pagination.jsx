import React from "react";
import PropTypes from "prop-types";

const Pagination = props => {
  const getPages = pagesCount => {
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
      pages.push(i);
    }

    return pages;
  };

  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = itemCount / pageSize + 1;
  const pages = getPages(pagesCount);

  if (pagesCount > 2) {
    return (
      <nav>
        <ul className="pagination" style={{ cursor: "pointer" }}>
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  return null;
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
