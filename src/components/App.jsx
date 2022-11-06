import { useState, useEffect } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoaderSpinner } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { fetchPhotos } from './Services/PixabyApi';

export const App = () => {
  const [page, setPage] = useState(1);
  const [querry, setQuerry] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (querry === null) {
      return;
    }

    setStatus('pending');
    fetchPhotos(querry, page)
      .then(data => {
        if (data.data.hits.length < 1) {
          console.log('ERROR');
          return Promise.reject(new Error('We can not find anything'));
        }

        setStatus('resolved');
        setPhotos([...photos, ...data.data.hits]);
      })
      .catch(e => setStatus('rejected'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querry, page]);

  const onSubmitForm = ({ querry, page }) => {
    setPhotos([]);

    setQuerry(querry);
    setPage(page);
  };

  const loadMore = () => {
    setPage(prevQuerry => prevQuerry + 1);
  };

  return (
    <>
      {/* alltime */}
      <SearchBar onSubmitForm={onSubmitForm} actualQuerry={querry} />

      {/* pending */}
      {status === 'pending' && (
        <>
          <ImageGallery data={photos} />
          <LoaderSpinner />
        </>
      )}

      {/* resolved */}
      {status === 'resolved' && (
        <>
          <ImageGallery data={photos} />
          <LoadMoreButton loadMore={loadMore} />
        </>
      )}

      {/* rejected */}
      {status === 'rejected' && (
        <div>Sorry, we can not find anything! Please retry your search</div>
      )}
    </>
  );
};
