import { Audio } from 'react-loader-spinner';
import { LoaderPlace } from './Loader.styled';

export const LoaderSpinner = () => {
  return (
    <LoaderPlace>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </LoaderPlace>
  );
};
