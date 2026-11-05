import { useState } from "react";

export default function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  // Validate item counts
  const safeTotalItems = Number.isFinite(totalItems)
    ? Math.max(0, Math.floor(totalItems))
    : 0;

  const safeItemsPerPage = Number.isFinite(itemsPerPage)
    ? Math.max(1, Math.floor(itemsPerPage))
    : 10;

  // Calculate total pages
  const totalPages = Math.ceil(safeTotalItems / safeItemsPerPage);

  // Current page state
  const [currentPage, setCurrentPage] = useState(() => {
    return Number.isFinite(initialPage)
      ? Math.max(1, Math.floor(initialPage))
      : 1;
  });

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
      Math.max(1, Math.floor(pageNumber)),
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
  const canPrevPage = safeCurrentPage > 1 && totalPages > 0;

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
