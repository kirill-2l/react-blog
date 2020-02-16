const initialState = {
  searchQuery: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload
      };
    case "RESET_SEARCH_QUERY":
      return '';
    default:
      return state;
  }
};
