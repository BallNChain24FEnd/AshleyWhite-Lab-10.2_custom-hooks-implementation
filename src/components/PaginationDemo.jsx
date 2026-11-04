import { useState } from "react";
import usePagination from "../hooks/usePagination";

export default function PaginationDemo() {
  // Sample items
  const items = Array.from({ length: 123 }, (_, index) => `Item ${index + 1}`);

  // Demo settings
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showEmpty, setShowEmpty] = useState(false);

  // Select item list
  const displayItems = showEmpty ? [] : items;

  // Use pagination hook
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(displayItems.length, itemsPerPage);

  // Get current items
  const currentItems = displayItems.slice(startIndex, endIndex + 1);

  // Create page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <section>
      <h2>Pagination Demo</h2>

      {/* Items per page */}
      <label htmlFor="itemsPerPage">Items per page: </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={(event) => {
          setItemsPerPage(Number(event.target.value));
          setPage(1);
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>

      <p>Total Items: {displayItems.length}</p>

      {/* Empty list test */}
      <label>
        <input
          type="checkbox"
          checked={showEmpty}
          onChange={(event) => {
            setShowEmpty(event.target.checked);
            setPage(1);
          }}
        />
        Test empty list
      </label>

      {/* Display items */}
      {displayItems.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul>
          {currentItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {/* Previous button */}
      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>

      <span> Page {currentPage} of {totalPages} </span>

      {/* Next button */}
      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>

      {/* Item count */}
      <p>
        {displayItems.length === 0
          ? "Showing 0 items"
          : `Showing items ${startIndex + 1} - ${endIndex + 1}
             (Total on this page: ${itemsOnCurrentPage})`}
      </p>

      {/* Page number buttons */}
      <div>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            disabled={currentPage === pageNumber}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={currentPage === pageNumber ? "page" : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </section>
  );
}
