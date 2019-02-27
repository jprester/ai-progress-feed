import React from 'react';

import { updateSearchText, clearSearchResults } from '../../../actions/';
import { connect } from 'react-redux';

const SearchInput = (props: any) => {
  console.log("search props: ", props);

  return(
    <div className="search-input-container">
      <input type="text" placeholder="search" className="search-input" onChange={(event) => onChangeValueInput(event, props)} value={props.searchQuery || ''} onKeyPress={(event) => onSearchKeypress(event, props)}/>
      <button className="search-button" onClick={() => onClickSearchButton(props)}>Search</button>
    </div>
  );
};

function onSearchKeypress(event: any, props: any) {
  if (event.charCode === 13 && props.searchQuery && props.searchQuery.length > 2) {
      props.updateSearchText('');
      props.clearSearchResults();
      props.historyData.history.push(`/search/${props.searchQuery}`);
  } else {
    console.log("search term needs to have at least 3 letters");
  }
}

function onChangeValueInput(event: any, props: any) {
  const searchText = event.currentTarget.value || '';

  props.updateSearchText(searchText);
}

function onClickSearchButton(props: any) {
  if (props.searchQuery && props.searchQuery.length > 2) {
    props.updateSearchText('');
    props.clearSearchResults();
    props.historyData.history.push(`/search/${props.searchQuery}`);
  } else {
    console.log("search term needs to have at least 3 letters");
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateSearchText: (text: string) => dispatch(updateSearchText(text)),
  clearSearchResults: () => dispatch(clearSearchResults(),)
});

export default connect(null, mapDispatchToProps)(SearchInput);
