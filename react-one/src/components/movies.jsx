import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./comman/pagination";
import { paginate } from "../utlis/paginate";
import ListGroup from "../components/comman/listGroup";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";
import Input from "./comman/input";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: {},
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
    search: { search: "" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearchChange = ({ currentTarget: input }) => {
    const search = { ...this.state.search };
    const selectedGenre = { ...this.state.selectedGenre };
    selectedGenre._id = "";
    selectedGenre.name = "All Genres";
    search[input.name] = input.value;
    this.setState({ selectedGenre, search });
  };

  getSearchMovie = () => {
    const { movies: allMovies, search } = this.state;
    const searchedMovie =
      search["search"] === ""
        ? allMovies
        : allMovies.filter(m =>
            m.title.toLowerCase().includes(search["search"].toLowerCase())
          );
    console.log(search["search"]);
    return searchedMovie;
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;

    const searchedMovie = this.getSearchMovie();
    console.log(searchedMovie);

    const filtered =
      selectedGenre && selectedGenre._id
        ? searchedMovie.filter(m => m.genre._id === selectedGenre._id)
        : searchedMovie;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;

    const {
      pageSize,
      currentPage,
      selectedGenre,
      genres,
      sortColumn
    } = this.state;

    if (count === 0) return <p>Please add new data to database</p>;

    const { totalCount, data: movies } = this.getPageData();
    return (
      <div className="row" style={{ margin: "20px 50px 50px" }}>
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: "20px" }}
          >
            New movie
          </Link>
          <p>Showing {totalCount} movies in the database</p>
          <Input
            name={"search"}
            label={null}
            value={this.state.search["search"]}
            error={null}
            onChange={this.handleSearchChange}
          />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
