import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Запобігаємо стандартній поведінці форми
        if (query.trim() === '') {
            toast.error('Please enter a search term');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={styles.header}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleInputChange}
                />
                <button type="submit" className={styles.icon}>
                    <FaSearch />
                </button>
            </form>
            <ToastContainer />
        </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
