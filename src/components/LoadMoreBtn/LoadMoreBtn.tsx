import React from 'react';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return <button onClick={onClick}>Load more</button>;
};

export default LoadMoreBtn;
