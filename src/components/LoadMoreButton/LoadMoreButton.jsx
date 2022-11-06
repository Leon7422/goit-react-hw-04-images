import { LoadMore } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

export const LoadMoreButton = ({ loadMore }) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      LOAD MORE
    </LoadMore>
  );
};

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func,
};
