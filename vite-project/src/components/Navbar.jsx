import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout actions
    setAuthState({ isAuthenticated: false, token: null, email: null });
    // Redirect to login page
    history.push('/login');
  };

  return (
    <nav>
      <div>
        {authState.isAuthenticated ? (
          <>
            <span>Welcome, {authState.email}</span>
            <Link to="/">Home</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;