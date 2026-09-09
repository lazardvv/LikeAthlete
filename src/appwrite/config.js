export {
  supabase,
  DEV_USER_ID,
  isDevMode,
  getCurrentUserId,
} from '../../services/appwriteConfig';

export const account = {
  getSession: async () => ({ data: { session: null } }),
  get: async () => ({
    id: 'dev-user-1',
    name: 'Developer',
    email: 'dev@local.test',
  }),
  createEmailPasswordSession: async () => ({ data: { session: { user: { id: 'dev-user-1' } } } }),
  deleteSession: async () => ({ data: null }),
};

export const client = null;