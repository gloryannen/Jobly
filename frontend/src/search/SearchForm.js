import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form>
      <div className="input-group mb-3 my-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-prepend">
          <button
            className="inline btn btn-primary"
            type="submit"
            onClick={handleSearch}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
