// src/components/LoadMoreBtn/LoadMoreBtn.jsx
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onClick }) => {
    return <button onClick={onClick}>Load more</button>;
};

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
