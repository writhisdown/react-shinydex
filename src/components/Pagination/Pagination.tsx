import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import Button from "@/components/Button/Button";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";

import styles from "./Pagination.module.scss";
import classNames from "classnames/bind";

type PaginationTypes = {
  totalPages: number,
  currentPage: number,
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}

const cx = classNames.bind(styles);

export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationTypes) {
  const pageNumbers = [];

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  function handlePrevious() {
    onPageChange((page) => page - 1);
  }
  
  function handleNext() {
    onPageChange((page) => page + 1);
  }
  
  function handlePage(pageNumber: number) {
    onPageChange(pageNumber);
  }

  return (
    <nav aria-labelledby="pagination" className={styles.pagination}>
      <h2 id="pagination">
        <VisuallyHidden>
          Pokemon Page Navigation
        </VisuallyHidden>
      </h2>
      <ul className={styles["pagination__list"]}>
        <li 
          className={cx("pagination__prev", {"hidden": isFirstPage})}
          aria-hidden={isFirstPage ? "true" : null}
        >
          <Button disabled={isFirstPage} handleClick={handlePrevious}>
            <ChevronLeft aria-hidden="true"/>
            <VisuallyHidden>Previous</VisuallyHidden>
          </Button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button
              className={cx({"active": number === currentPage})}
              handleClick={() => handlePage(number)}
            >
              <VisuallyHidden>Page</VisuallyHidden>
              <span>{number}</span>
            </Button>
          </li>
        ))}
        <li
          className={cx("pagination__next", {"hidden": isLastPage})}
          aria-hidden={isLastPage ? "true" : null}
        >
          <Button disabled={isLastPage} handleClick={handleNext}>
            <VisuallyHidden>Next</VisuallyHidden>
            <ChevronRight aria-hidden="true"/>
          </Button>
        </li>
      </ul>
    </nav>
  );
}