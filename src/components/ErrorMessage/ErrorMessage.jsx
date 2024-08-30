import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return <div>{message}</div>;
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
