import { useState } from 'react';
import { Searchform, SearchButton, SearchInput, Div } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmitForm, actualQuerry }) => {
  const [querry, setQuerry] = useState('');
  const [page, setPage] = useState(1);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setQuerry(value);
    setPage(1);
  };

  const submitSearch = e => {
    e.preventDefault();
    onSubmitForm({ querry, page });
  };

  return (
    <Searchform onSubmit={submitSearch}>
      <Div>
        <SearchInput
          type="text"
          name="querry"
          onChange={handleInputChange}
          value={querry}
          placeholder="Search images and photos"
        ></SearchInput>
        <SearchButton
          type="submit"
          disabled={actualQuerry === querry}
        ></SearchButton>
      </Div>
    </Searchform>
  );
};

SearchBar.propTypes = {
  onSubmitForm: PropTypes.func,
};
