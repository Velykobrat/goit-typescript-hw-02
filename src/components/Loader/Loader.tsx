import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader: React.FC = () => {
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
