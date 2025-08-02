import React from 'react';
import './SearchBar.css';

interface Props {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => {
  return (
    <div className="search-bar-wrapper">
      <span className="search-icon">
        <i className="fa fa-search"></i>
      </span>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name or specialization"
        value={query}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;