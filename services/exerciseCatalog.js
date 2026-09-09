import { supabase } from './appwriteConfig';

const mapExercise = (row) => {
  if (!row) return null;

  return {
    ...row,
    id: Number(row.id),
    athlete: row.athlete,
    title: row.title,
    athletesSports: row.athletes_sports,
    videoURL: row.video_url,
    videoURL_360p: row.video_url_360p,
    poster: row.poster_url,
  };
};

export const getExercises = async () => {
  const { data, error } = await supabase
    .from('exercises')
    .select('*')
    .order('id', { ascending: true });

  if (error) throw error;
  return (data || []).map(mapExercise);
};

export const getExerciseById = async (id) => {
  const { data, error } = await supabase
    .from('exercises')
    .select('*')
    .eq('id', Number(id))
    .maybeSingle();

  if (error) throw error;
  return mapExercise(data);
};
