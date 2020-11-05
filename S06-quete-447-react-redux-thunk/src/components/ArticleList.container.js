import { connect } from 'react-redux';
import { ArticleList } from '.';

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps)(ArticleList);
