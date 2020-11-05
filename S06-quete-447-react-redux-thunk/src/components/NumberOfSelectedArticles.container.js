import { connect } from 'react-redux';
import NumberOfSelectedArticles from './NumberOfSelectedArticles';

const getNumberOfSelectedArticles = articles =>
  articles.filter(article => article.isSelected).length;

const mapStateToProps = ({ articles }) => ({
  value: getNumberOfSelectedArticles(articles),
});

export default connect(mapStateToProps)(NumberOfSelectedArticles);
