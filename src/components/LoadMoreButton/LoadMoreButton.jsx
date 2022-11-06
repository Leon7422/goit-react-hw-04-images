import React from 'react';
import { LoadMore } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

export class LoadMoreButton extends React.Component {
  render() {
    return (
      <LoadMore type="button" onClick={this.props.loadMore}>
        LOAD MORE
      </LoadMore>
    );
  }
}

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func,
};
