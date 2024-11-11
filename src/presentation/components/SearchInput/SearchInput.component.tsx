import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

type SearchInputProps = {
    button?: boolean;
    initialValue?: string;
    handleSearchInput: (query: string) => void;
}

const SearchInput = ({button = true, initialValue, handleSearchInput}: SearchInputProps) => {
  const [query, setQuery] = useState<string>(initialValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  const handleSearch = () => {
    if (query) {
        handleSearchInput(query);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter" && query) {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 flex-col w-full">
      <div className="relative w-full max-w-lg">
        <input
          data-testid="search-input"
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Buscar..."
          className="w-full pl-10 pr-12 py-3 text-lg border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FaSearch className="text-gray-400" />
        </div>
        {query && (
          <div
            className="absolute right-16 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleClear}
          >
            <FaTimes className="text-gray-400" />
          </div>
        )}
      </div>


      {button && <button
      data-testid="search-button"
          onClick={handleSearch}
          disabled={!query} 
          className={`mt-10 right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 text-black bg-gray-300 rounded-sm shadow-md ${
            !query ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
        >
          Buscar
        </button>}

    </div>
  );
};

export default SearchInput;
