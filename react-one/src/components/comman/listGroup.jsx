import React from "react";

const ListGroup = props => {
  const { genres, currentGenre, onCurrentGenreChange } = props;
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          key={genre._id}
          style={{ cursor: "pointer" }}
          className={
            genre.name === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onCurrentGenreChange(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
