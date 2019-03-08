import React from 'react';

import { connect } from 'react-redux';

const SearchInput = (props: any) => {
  return(
    <div className="search-input-container">
      <input
        type="text"
        placeholder="search"
        className="search-input"
        onChange={(event) => onChangeValueInput(event, props)}
        value={props.searchQuery || ''}
        onKeyPress={(event) => onSearchKeypress(event, props)}
      />
      <button className="search-button" onClick={() => onClickSearchButton(props)}>Search</button>
    </div>
  );
};

function onSearchKeypress(event: any, props: any) {
  if (event.charCode === 13 && props.searchQuery && props.searchQuery.length > 2) {
      props.updateSearchText('');
      props.clearData();
      props.historyData.history.push(`/search/${props.searchQuery}`);
  }
}

function onChangeValueInput(event: any, props: any) {
  const searchText = event.currentTarget.value || '';

  props.updateSearchText(searchText);
}

function onClickSearchButton(props: any) {
  if (props.searchQuery && props.searchQuery.length > 2) {
    props.updateSearchText('');
    props.clearData();
    props.historyData.history.push(`/search/${props.searchQuery}`);
  }
}

export default SearchInput;
