import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css'; 

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <div className={styles['gallery-container']}>
            <ul className={styles.gallery}>
                {images.map(image => (
                    <li key={image.id}>
                        <ImageCard image={image} onClick={() => onImageClick(image)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageGallery;