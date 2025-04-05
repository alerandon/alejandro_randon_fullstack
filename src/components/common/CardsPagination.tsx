import React from 'react';

const CardsPagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 5;

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return pages;
    }

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    const visiblePages: (number | string)[] = pages.slice(start - 1, end);

    if (start > 1) {
      visiblePages.unshift('...');
    }

    if (end < totalPages) {
      visiblePages.push('...');
    }

    return visiblePages;
  };

  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:opacity-50"
      >
        &lt;
      </button>
      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-2 ${page === currentPage ? 'font-bold text-[#D6F379]' : ''}`}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default CardsPagination;
