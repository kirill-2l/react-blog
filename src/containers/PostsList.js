import { connect } from 'react-redux';

import PostsList from '../components/PostsList';

const mapStateToProps = ({ search }) => ({
  searchQuery: search.searchQuery
});

// first arg connect store to App component, second arg connect actions
export default connect(mapStateToProps)(PostsList);
