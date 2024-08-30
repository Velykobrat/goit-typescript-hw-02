import React from 'react';
import styles from './ImageCard.module.css';

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
