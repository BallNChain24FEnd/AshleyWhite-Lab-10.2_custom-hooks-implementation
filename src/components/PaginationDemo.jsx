import usePagination from "../hooks/usePagination";

export default function PaginationDemo() {
  // Create sample items
  const items = Array.from({ length: 123 }, (_, index) => `Item ${index + 1}`);

  // Use pagination hook
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(items.length, 10);

  // Get current page items
  const currentItems = items.slice(startIndex, endIndex + 1);

  return (
    <section>
      <h2>Pagination Demo</h2>

      {/* Item information */}
      <p>Items per page: 10</p>
      <p>Total Items: {items.length}</p>

      {/* Display current items */}
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Page navigation */}
      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>

      <span> Page {currentPage} of {totalPages} </span>

      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>

      {/* Item count */}
      <p>
        Showing items {startIndex + 1} - {endIndex + 1}
        {" "}(Total on this page: {itemsOnCurrentPage})
      </p>
    </section>
  );
}
