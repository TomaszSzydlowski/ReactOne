import http from "./httpService";

function movieUrl(id) {
  if (id) return `/movies/${id}`;
  return `/movies`;
}

export function getMovies() {
  return http.get(movieUrl());
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(movieUrl(), movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId) + "/" + movieId);
}
