import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div>
            <TailSpin
                height="80"
                width="80"
                color="#00BFFF"
                ariaLabel="loading"
            />
        </div>
    );
};

export default Loader;
