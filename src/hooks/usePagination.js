import { useState } from "react";

export default function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  // Calculate total pages
  const safeTotalItems = Math.max(0, totalItems);
  const safeItemsPerPage = Math.max(1, itemsPerPage);
  const totalPages = Math.ceil(safeTotalItems / safeItemsPerPage);

  // Current page state
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Keep page within range
  const safeCurrentPage = Math.min(
    Math.max(1, currentPage),
    Math.max(1, totalPages)
  );

  // Calculate item indexes
  const startIndex = totalPages === 0
    ? 0
    : (safeCurrentPage - 1) * safeItemsPerPage;

  const endIndex = totalPages === 0
    ? -1
    : Math.min(startIndex + safeItemsPerPage - 1, safeTotalItems - 1);

  // Count items on page
  const itemsOnCurrentPage = totalPages === 0
    ? 0
    : endIndex - startIndex + 1;

  // Jump to selected page
  function setPage(pageNumber) {
    if (!Number.isFinite(pageNumber)) return;

    const newPage = Math.min(
      Math.max(1, Math.trunc(pageNumber)),
      Math.max(1, totalPages)
    );

    setCurrentPage(newPage);
  }

  // Go to next page
  function nextPage() {
    setPage(safeCurrentPage + 1);
  }

  // Go to previous page
  function prevPage() {
    setPage(safeCurrentPage - 1);
  }

  // Check navigation
  const canNextPage = safeCurrentPage < totalPages;
  const canPrevPage = safeCurrentPage > 1;

  return {
    currentPage: safeCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  };
}
