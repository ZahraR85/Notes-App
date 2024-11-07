import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const SignOut = () => {
  useEffect(() => {
    localStorage.removeItem('currentUser');
  }, []);

  return <Navigate to="/signin" />;
};

export default SignOut;
