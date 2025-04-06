import React from 'react';

interface SearchInputProps {
  searchValue: React.RefObject<string>;
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchValue, onSearch }) => {
  return (
    <div className="flex w-full items-center rounded-full bg-white px-4 py-2 shadow-md lg:w-3/4">
      <input
        type="text"
        placeholder="Search for an artist..."
        className="w-1/2 flex-grow bg-transparent pr-2.5 text-sm text-black placeholder-gray-500 outline-none"
        onKeyDown={(e) => {
          const input = e.target as HTMLInputElement;
          searchValue.current = input.value.trim();
          if (e.key === 'Enter' && searchValue.current)
            onSearch(searchValue.current);
        }}
      />
      <button
        className="cursor-pointer rounded-full bg-[#D6F379] px-4 py-2 font-medium text-black"
        onClick={() => {
          const input = document.querySelector(
            'input[type="text"]',
          ) as HTMLInputElement;
          searchValue.current = input.value.trim();
          if (searchValue.current) onSearch(searchValue.current);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
