import { createElement } from '../utils/createElement';

export const filmCard = filmData => {
    const { poster_path: posterPath, original_title: originalTitle, overview, genre_ids: genreIds, release_date: releaseDate, vote_average: voteAverage } = filmData;

    // const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    
    const filmPosterElem = createElement('img', {
    class: 'film-poster',
      src: `https://image.tmdb.org/t/p/w500${ posterPath }`,
    alt: 'film poster',
  });

  const filmTitleElem = createElement(
    'h2',
    {
      class: 'film-title',
    },
    originalTitle,
  );

  const filmDescriptionElem = createElement(
    'p',
    {
      class: 'film-description',
    },
    overview,
  );

  const filmCardElem = createElement(
    'div',
    {
      class: 'film-card',
    },
    [filmPosterElem, filmTitleElem, filmDescriptionElem],
  );

  return filmCardElem;
};