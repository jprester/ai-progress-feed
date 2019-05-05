import React from 'react';

interface ISearchInputProps {
  history: string[];
  searchQuery: any;
  clearData: () => void;
  setCategory: (text: string) => void;
  updateSearchText: (text: string) => void;
}

const onSearchKeypress = (event: any, props: ISearchInputProps) => {
  if (event.charCode === 13 && props.searchQuery && props.searchQuery.length > 2) {
    props.updateSearchText('');
    props.clearData();
    props.setCategory('');
    props.history.push(`/search/${props.searchQuery}`);
  }
};

const onChangeValueInput = (event: React.FormEvent<HTMLInputElement>, props: ISearchInputProps) => {
  const searchText = event.currentTarget.value || '';

  props.updateSearchText(searchText);
};

const onClickSearchButton = (event: React.FormEvent<HTMLInputElement>, props: ISearchInputProps) => {
  if (props.searchQuery && props.searchQuery.length > 2) {
    props.updateSearchText('');
    props.clearData();
    props.setCategory('');
    props.history.push(`/search/${props.searchQuery}`);
  }
};

const SearchInput: React.FC<ISearchInputProps> = (props) => {
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
      <button className="search-button" onClick={(event: any) => onClickSearchButton(event, props)}>Search</button>
    </div>
  );
};

export default SearchInput;
