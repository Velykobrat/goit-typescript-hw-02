import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './ImageModal.module.css'; // Імпортуємо стилі

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
    // Обчислення ширини та висоти модального вікна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imageWidth = image.width;
    const imageHeight = image.height;
    const headerHeight = 70;
    const maxWidth = windowWidth - 40; // 40px відступи від країв вікна
    const maxHeight = windowHeight - 40 - headerHeight; // Відступаємо на висоту хедера

    // Визначення, яка сторона має бути обмежена розміром
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

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.object,
};

export default ImageModal;
