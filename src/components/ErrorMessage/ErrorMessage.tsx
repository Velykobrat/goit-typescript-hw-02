import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
