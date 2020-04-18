import { connect } from "react-redux";

import { clearData, setCategory, updateSearchText } from "../actions/";
import SearchInput from "../components/widgets/SearchInput/SearchInput";

interface ISearchInputContainerState {
  newsData: [];
  searchQuery: string;
}

const mapStateToProps = (state: ISearchInputContainerState) => {
  return {
    newsData: state.newsData,
    searchQuery: state.searchQuery,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (text: string) => dispatch(setCategory(text)),
  updateSearchText: (text: string) => dispatch(updateSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
