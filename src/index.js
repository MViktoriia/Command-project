import './sass/main.scss';

const fetchFilms = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=e3f9ac8b4c25ea958657e460a35663f5");
  const films = await response.json();
  return films;
};

fetchFilms()
  .then(films => console.log(films))
  .catch(error => console.log(error));