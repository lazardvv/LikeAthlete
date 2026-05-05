import React, { createContext, useState, useEffect, useContext } from 'react';
import { account } from '../../services/appwriteConfig';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    checkUserStatus();
  }, []);

  // Function to check user status
  const checkUserStatus = async () => {
    try {
      const currentSession = await account.getSession('current');
      if (currentSession) {
        const currentUser = await account.get();
        setUser(currentUser);
      }
    } catch (error) {
      console.error('Session check error:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession({
        email,
        password
      });
      return await checkUserStatus();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  // Get user initials
  const getUserInitials = () => {
    if (!user || !user.name) return '';
    
    const nameParts = user.name.split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    
    return (
      nameParts[0].charAt(0).toUpperCase() + 
      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
    );
  };

  // Context value
  const value = {
    user,
    loading,
    login,
    logout,
    getUserInitials
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;