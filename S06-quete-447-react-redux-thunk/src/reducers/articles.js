export const FETCH_ARTICLES__RESOLVE = 'FETCH_ARTICLES__RESOLVE';
export const TOGGLE_ARTICLE_SELECTION = 'TOGGLE_ARTICLE_SELECTION';

const articles = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES__RESOLVE:
      return action.articles.map(article => ({
        ...article,
        isSelected: false,
      }));
    case TOGGLE_ARTICLE_SELECTION:
      return state.map(article => {
        if (article.name === action.articleName)
          return { ...article, isSelected: !article.isSelected };
        return article;
      });
    default:
      return state;
  }
};

export default articles;
