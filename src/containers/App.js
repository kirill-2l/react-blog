import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postsActions from "../actions/posts";

import App from "../components/App";

const mapStateToProps = ({ posts }) => ({
  posts: posts.items,
  isReady: posts.isReady
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(postsActions, dispatch)
});



// first arg connect store to App component, second arg connect actions
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export {routes};
