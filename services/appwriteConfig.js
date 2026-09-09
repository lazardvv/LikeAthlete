import { createClient } from '@supabase/supabase-js';

export const DEV_USER_ID = 'dev-user-1';
export const isDevMode =
  String(import.meta.env.VITE_ENABLE_DEV_MODE ?? 'true').toLowerCase() === 'true' ||
  (!import.meta.env.VITE_SUPABASE_URL && !import.meta.env.VITE_SUPABASE_ANON_KEY);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dev-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

export const getCurrentUserId = async () => {
  if (isDevMode) return DEV_USER_ID;

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) return DEV_USER_ID;
  return data.user.id || DEV_USER_ID;
};

export const getSupabaseUser = async () => {
  if (isDevMode) {
    return {
      id: DEV_USER_ID,
      name: 'Developer',
      email: 'dev@local.test',
    };
  }

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) return null;

  return {
    id: data.user.id,
    name: data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || 'User',
    email: data.user.email,
  };
};

export const signInWithSupabase = async (email, password) => {
  if (isDevMode) {
    return {
      id: DEV_USER_ID,
      name: 'Developer',
      email: email || 'dev@local.test',
    };
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;

  return {
    id: data.user.id,
    name: data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || 'User',
    email: data.user.email,
  };
};

export const signUpWithSupabase = async (email, password, name) => {
  if (isDevMode) {
    return {
      id: DEV_USER_ID,
      name: name || 'Developer',
      email: email || 'dev@local.test',
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name || '',
      },
    },
  });

  if (error) throw error;

  return {
    id: data.user?.id || DEV_USER_ID,
    name: name || data.user?.user_metadata?.full_name || data.user?.email?.split('@')[0] || 'User',
    email: data.user?.email || email,
  };
};

export const signOutFromSupabase = async () => {
  if (isDevMode) return;

  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const account = {
  getSession: async () => ({ data: { session: null } }),
  get: async () => ({
    id: DEV_USER_ID,
    name: 'Developer',
    email: 'dev@local.test',
  }),
  createEmailPasswordSession: async () => ({ data: { session: { user: { id: DEV_USER_ID } } } }),
  deleteSession: async () => ({ data: null }),
};

export const databases = supabase; 