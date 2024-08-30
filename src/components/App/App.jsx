// src/App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import styles from './App.module.css';


const App = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalImage, setModalImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!query) return;

        const fetchImages = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=BalC9pYc4FBrCsIKEVlYs4A4XHBdSRUlwmaFEmdpm9I`
                );
                setImages((prevImages) => [...prevImages, ...response.data.results]);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
    }, [query, page]);

    const handleSearchSubmit = (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleImageClick = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <div className={styles['app-container']}>
            <SearchBar onSubmit={handleSearchSubmit} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={handleImageClick} />
            {isLoading && <Loader />}
            {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
            {modalImage && (
                <ImageModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    image={modalImage}
                />
            )}
        </div>
    );
};

export default App;