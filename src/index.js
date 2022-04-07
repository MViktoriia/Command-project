import './sass/main.scss';
import TheMoviedbApiService from './js/filmApi';
import { filmCard } from './js/components/filmCard' 

const theMovieApiService = new TheMoviedbApiService;
const containerEl = document.querySelector('.container');
console.log(containerEl);



theMovieApiService.getPopularMovies()
.then(response => {
  console.log(response.data);
}).catch(error => console.log(error));
    
theMovieApiService.getMovie()
.then(response => {
  console.log(response.data);
  console.log(filmCard(response.data));
  containerEl.append(filmCard(response.data));

    }).catch(error => console.log(error));



