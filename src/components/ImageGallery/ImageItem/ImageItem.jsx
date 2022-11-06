/* import React from 'react'; */
import { GalleryImage, ImageGalleryItem, ImageModal } from './ImageItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ImageItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    setShowModal(state => !state);
  };

  return (
    <>
      <ImageGalleryItem onClick={toggleModal}>
        <GalleryImage src={data.webformatURL} alt=""></GalleryImage>
      </ImageGalleryItem>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ImageModal src={data.largeImageURL} alt="" />
        </Modal>
      )}
    </>
  );
};

ImageItem.propTypes = {
  data: PropTypes.object,
};
