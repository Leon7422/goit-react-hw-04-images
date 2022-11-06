import React from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoaderSpinner } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { fetchPhotos } from './Services/PixabyApi';

export class App extends React.Component {
  state = {
    page: 1,
    querry: null,
    photos: [],
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.querry !== this.state.querry ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      fetchPhotos(this.state.querry, this.state.page)
        .then(data => {
          if (data.data.hits.length < 1) {
            console.log('ERROR');
            return Promise.reject(new Error('We can not find anything'));
          }

          return this.setState(prevState => ({
            status: 'resolved',
            photos: [...prevState.photos, ...data.data.hits],
          }));
        })
        .catch(e => this.setState({ status: 'rejected' }));
    }
  }

  onSubmitForm = querry => {
    this.setState({ photos: [] });

    this.setState(querry);
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status } = this.state;

    return (
      <>
        {/* alltime */}
        <SearchBar
          onSubmitForm={this.onSubmitForm}
          querry={this.state.querry}
        />

        {/* pending */}
        {status === 'pending' && (
          <>
            <ImageGallery data={this.state.photos} />
            <LoaderSpinner />
          </>
        )}

        {/* resolved */}
        {status === 'resolved' && (
          <>
            <ImageGallery data={this.state.photos} />
            <LoadMoreButton loadMore={this.loadMore} />
          </>
        )}

        {/* rejected */}
        {status === 'rejected' && (
          <div>Sorry, we can not find anything! Please retry your search</div>
        )}
      </>
    );
  }
}
