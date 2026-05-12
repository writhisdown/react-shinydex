import { PAGELIMIT, TOTALITEMS } from "@/data/page";

import { ChevronLeft, ChevronRight } from "react-feather";

import Button from "@/components/Button/Button";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";

import styles from "./Pagination.module.scss";

export default function Pagination() {
  const totalPages = Math.ceil(TOTALITEMS / PAGELIMIT);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  function handlePrevious() {
    
  }

  function handleNext() {

  }

  function handlePage() {

  }

  return (
    <nav aria-labelledby="pagination" className={styles.pagination}>
      <h2 id="pagination">
        <VisuallyHidden>
          Pokemon Page Navigation
        </VisuallyHidden>
      </h2>
      <ul className={styles["pagination__list"]}>
        <li className={styles["pagination__prev"]}>
          <Button handleClick={handlePrevious}>
            <ChevronLeft aria-hidden="true"/>
            <VisuallyHidden>Previous</VisuallyHidden>
          </Button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button handleClick={handlePage}>
              <VisuallyHidden>Page</VisuallyHidden>
              <span>{number}</span>
            </Button>
          </li>
        ))}
        <li className={styles["pagination__next"]}>
          <Button handleClick={handleNext}>
            <VisuallyHidden>Next</VisuallyHidden>
            <ChevronRight aria-hidden="true"/>
          </Button>
        </li>
      </ul>
    </nav>
  );
}