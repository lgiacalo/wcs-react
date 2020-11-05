import {
  FETCH_ARTICLES__BEGIN,
  FETCH_ARTICLES__RESOLVE,
} from '../reducers/areArticlesBeingFetched';
import { TOGGLE_ARTICLE_SELECTION } from '../reducers/articles';

export const toggleArticleSelection = dispatch => articleName => () => {
  dispatch({
    type: TOGGLE_ARTICLE_SELECTION,
    articleName,
  });
};

// A TESTER
// const toggleArticlesSelectionAction = articleName => ({
//   type: TOGGLE_ARTICLE_SELECTION,
//   articleName,
// });

// const toggleArticleSelection = dispatch => articleName => () => {
//   dispatch(toggleArticlesSelectionAction(articleName));
// };

export const merde = 'fjiejfie';

// THUNK permet d'emettre plusieurs actions / utilisé pour l'asynchrone.

export const fetchArticles = dispatch => async () => {
  dispatch({
    type: FETCH_ARTICLES__BEGIN,
  });
  const response = await fetch(
    'https://packing-list-weight-api.herokuapp.com/articles'
  );
  const articles = await response.json();
  dispatch({
    type: FETCH_ARTICLES__RESOLVE,
    articles,
  });
};
