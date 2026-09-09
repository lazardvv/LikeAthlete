import React, { createContext, useState, useEffect, useContext } from 'react';
import {
  DEV_USER_ID,
  isDevMode,
  getSupabaseUser,
  signInWithSupabase,
  signUpWithSupabase,
  signOutFromSupabase,
  supabase,
} from '../../services/appwriteConfig';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (isDevMode) {
      return { id: DEV_USER_ID, name: 'Developer', email: 'dev@local.test' };
    }
    return null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (isDevMode) {
        setUser({ id: DEV_USER_ID, name: 'Developer', email: 'dev@local.test' });
        setLoading(false);
        return;
      }

      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const currentUser = await getSupabaseUser();
          setUser(currentUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Session check error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setUser(null);
        return;
      }

      const nextUser = {
        id: session.user.id,
        name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
        email: session.user.email,
      };
      setUser(nextUser);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const currentUser = await signInWithSupabase(email, password);
      setUser(currentUser);
      return currentUser;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (email, password, name) => {
    try {
      const currentUser = await signUpWithSupabase(email, password, name);
      setUser(currentUser);
      return currentUser;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOutFromSupabase();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const getUserInitials = () => {
    if (!user || !user.name) return 'D';

    const nameParts = user.name.split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }

    return (
      nameParts[0].charAt(0).toUpperCase() +
      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
    );
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    setUser,
    getUserInitials,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthContext;