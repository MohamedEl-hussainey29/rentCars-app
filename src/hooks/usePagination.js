import { useState } from "react";

export default function usePagination(data, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const getPaginationGroup = () => {
    const pages = [];
    const showPages = 2;

    const startPage = Math.max(2, currentPage - showPages);
    const endPage = Math.min(totalPages - 1, currentPage + showPages);

    pages.push(1);

    if (startPage > 2) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return {
    currentPage,
    setCurrentPage,
    currentItems,
    totalPages,
    getPaginationGroup,
  };
}