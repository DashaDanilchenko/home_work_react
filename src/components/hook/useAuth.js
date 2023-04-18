import { useContext } from 'react';
import { AuthContext } from '../authorization/AuthProvider';

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;