import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        name="query"
        placeholder="Search..."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        className="form-control my-3"
      />
    </div>
  );
};

export default SearchBox;
