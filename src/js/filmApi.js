import axios from "axios";
import apiSettings from './apiSettings';

const { filmyApiKey, FILM_API_URL } = apiSettings;


export default class TheMoviedbApiService {
    constructor() {
        this.searchQuery = "";
        this.page = 1;
    }

    async getPopularMovies() {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e3f9ac8b4c25ea958657e460a35663f5');
        
        console.log(response.data);
        return response;
    }

    async getMovie() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/406759?api_key=e3f9ac8b4c25ea958657e460a35663f5&language=en-US');
        
        console.log(response.data);
        return response;
    }



    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}