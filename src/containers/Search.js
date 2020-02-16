import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as searchActions from "../actions/search";

import Search from "../components/Search";




const mapStateToProps = ({ search }) => ({
  searchQuery: search.searchQuery
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(searchActions, dispatch)
});

// first arg connect store to App component, second arg connect actions
export default connect(mapStateToProps, mapDispatchToProps)(Search);
