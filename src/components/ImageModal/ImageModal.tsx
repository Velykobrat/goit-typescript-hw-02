import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
  width: number;
  height: number;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const imageWidth = image.width;
  const imageHeight = image.height;
  const headerHeight = 70;
  const maxWidth = windowWidth - 40;
  const maxHeight = windowHeight - 40 - headerHeight;

  const aspectRatio = imageWidth / imageHeight;
  let modalWidth, modalHeight;
  if (aspectRatio > 1) {
    modalWidth = Math.min(maxWidth, imageWidth);
    modalHeight = modalWidth / aspectRatio;
  } else {
    modalHeight = Math.min(maxHeight, imageHeight);
    modalWidth = modalHeight * aspectRatio;
  }

  const modalStyles = {
    content: {
      width: `${modalWidth}px`,
      height: `${modalHeight}px`,
      top: `calc(50% + ${headerHeight / 2}px)`,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      border: 'none',
      background: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={modalStyles}
    >
      <div className={styles.imageContainer} onClick={onClose}>
        <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
