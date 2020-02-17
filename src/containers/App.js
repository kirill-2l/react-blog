import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/posts';

import App from '../components/App';

const searchPosts = (posts, searchQuery) =>
  posts.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

const mapStateToProps = ({ posts, search }) => ({
  posts: posts.items && searchPosts(posts.items, search.searchQuery),
  isReady: posts.isReady
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(postsActions, dispatch)
});

// first arg connect store to App component, second arg connect actions
export default connect(mapStateToProps, mapDispatchToProps)(App);
