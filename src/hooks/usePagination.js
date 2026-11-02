import { useState } from "react";

export default function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  // Current page state
  const [currentPage, setCurrentPage] = useState(initialPage);

  return { currentPage };
}
