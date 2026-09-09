import { createClient } from '@supabase/supabase-js';
import exercises from './src/data/exercises.js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || (!supabaseAnonKey && !serviceRoleKey)) {
  console.error('Missing VITE_SUPABASE_URL or Supabase key in environment. Use anon key or SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey || supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

const rows = (Array.isArray(exercises) ? exercises : [])
  .filter((ex) => ex && ex.id && ex.title)
  .map((ex) => ({
    id: Number(ex.id),
    athlete: String(ex.athlete ?? ''),
    title: String(ex.title ?? ''),
    athletes_sports: String(ex.athletesSports ?? ''),
    video_url: ex.videoURL || null,
    video_url_360p: ex.videoURL_360p || null,
    poster_url: ex.poster || null,
  }));

const { data, error } = await supabase
  .from('exercises')
  .upsert(rows, { onConflict: 'id' });

if (error) {
  console.error('Insert failed:', error);
  process.exit(1);
}

console.log(`Inserted/updated ${rows.length} exercises into public.exercises`);
console.log('Sample:', data?.[0] ?? 'No data returned');
