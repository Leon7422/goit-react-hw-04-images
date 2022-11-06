import React from 'react';
import { GalleryImage, ImageGalleryItem, ImageModal } from './ImageItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    return (
      <>
        <ImageGalleryItem onClick={this.toggleModal}>
          <GalleryImage
            src={this.props.data.webformatURL}
            alt=""
          ></GalleryImage>
        </ImageGalleryItem>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageModal src={this.props.data.largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

ImageItem.propTypes = {
  data: PropTypes.object,
};
