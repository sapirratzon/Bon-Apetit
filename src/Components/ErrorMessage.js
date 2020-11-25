import React, { useState } from 'react';

const ErrorMessage = props => {
  const [errorMessage, serErrorMessage] = useState(props.message);

  return (
    <p className='help-block text-danger bg-dark'>{errorMessage}</p>
  );
};

export default ErrorMessage;
