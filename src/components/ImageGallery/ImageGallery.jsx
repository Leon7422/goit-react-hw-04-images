import { ImageList } from './ImageGallery.styled';
import { ImageItem } from './ImageItem/ImageItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ data }) => {
  return (
    <ImageList>
      {data.map(photo => {
        return <ImageItem key={photo.largeImageURL} data={photo} />;
      })}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array,
};
