import { combineReducers } from 'redux';
import areArticlesBeingFetched from './areArticlesBeingFetched';
import articles from './articles';

const allReducers = combineReducers({ areArticlesBeingFetched, articles });

export default allReducers;
