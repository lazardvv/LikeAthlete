const exercises = [ /*
  {
    id: 1,
    athlete: 'Artur Beterbiev',
    title: 'Barbel hand Exercise',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Barbel hand Exercise.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Barbel hand Exercise.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Barbel hand Exercise_thumb.jpg'
  },
  {
    id: 2,
    athlete: 'Artur Beterbiev',
    title: 'Bench Press',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Bench Press.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Bench Press.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Bench Press_thumb.jpg'
  },
  {
    id: 3,
    athlete: 'Artur Beterbiev',
    title: 'Clap push ups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Clap push ups.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Clap push ups.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Clap push ups_thumb.jpg'
  },
  {
    id: 4,
    athlete: 'Artur Beterbiev',
    title: 'Crunch medicine ball throws',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Crunch medicine ball throws.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Crunch medicine ball throws.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Crunch medicine ball throws_thumb.jpg'
  },
  {
    id: 5,
    athlete: 'Artur Beterbiev',
    title: 'Deadlift 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Deadlift 1.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Deadlift 1.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Deadlift 1_thumb.jpg'
  },
  {
    id: 6,
    athlete: 'Artur Beterbiev',
    title: 'Deadlift 2',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Deadlift 2.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Deadlift 2.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Deadlift 2_thumb.jpg'
  },
  {
    id: 7,
    athlete: 'Artur Beterbiev',
    title: 'Dumbell Rhytm Byceps Exercise',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Dumbell Rhytm Byceps Exercise.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Dumbell Rhytm Byceps Exercise.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Dumbell Rhytm Byceps Exercise_thumb.jpg'
  },
  {
    id: 8,
    athlete: 'Artur Beterbiev',
    title: 'Dumbell Shoulder Exercise',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Dumbell Shoulder Exercise.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Dumbell Shoulder Exercise.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Dumbell Shoulder Exercise_thumb.jpg'
  },
  {
    id: 9,
    athlete: 'Artur Beterbiev',
    title: 'Hammer Punches 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Hammer Punches 1.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Hammer Punches 1.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Hammer Punches 1_thumb.jpg'
  },
  {
    id: 10,
    athlete: 'Artur Beterbiev',
    title: 'Hammer Punches 2',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Hammer Punches 2.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Hammer Punches 2.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Hammer Punches 2_thumb.jpg'
  },
  {
    id: 11,
    athlete: 'Artur Beterbiev',
    title: 'Hands exercise',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Hands exercise.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Hands exercise.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Hands exercise_thumb.jpg'
  },
  {
    id: 12,
    athlete: 'Artur Beterbiev',
    title: 'Hang cleans',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Hang cleans.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Hang cleans.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Hang cleans_thumb.jpg'
  },
  {
    id: 13,
    athlete: 'Artur Beterbiev',
    title: 'Rope exercise',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Artur Beterbiev_Boxing_Rope exercise.mp4',
    videoURL_360p: '/videos/exercises/Artur Beterbiev_Boxing_Rope exercise.mp4',
    poster: '/videos/exercises/Artur Beterbiev_Boxing_Rope exercise_thumb.jpg'
  },
  {
    id: 14,
    athlete: 'Asafa Powell',
    title: ' Bench Press',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_ Bench Press.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_ Bench Press.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_ Bench Press_thumb.jpg'
  },
  {
    id: 15,
    athlete: 'Asafa Powell',
    title: 'Back Squat',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_Back Squat.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_Back Squat.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_Back Squat_thumb.jpg'
  },
  {
    id: 16,
    athlete: 'Asafa Powell',
    title: 'Box Squat',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_Box Squat.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_Box Squat.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_Box Squat_thumb.jpg'
  },
  {
    id: 17,
    athlete: 'Asafa Powell',
    title: 'Box Squats',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_Box Squats.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_Box Squats.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_Box Squats_thumb.jpg'
  },
  {
    id: 18,
    athlete: 'Asafa Powell',
    title: 'Box Squat',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_Box Squat_Cable Hip Extensions.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_Box Squat_Cable Hip Extensions.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_Box Squat_Cable Hip Extensions_thumb.jpg'
  },
  {
    id: 19,
    athlete: 'Asafa Powell',
    title: 'Medicine Ball Push Ups',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_Medicine Ball Push Ups.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_Medicine Ball Push Ups.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_Medicine Ball Push Ups_thumb.jpg'
  },
  {
    id: 20,
    athlete: 'Asafa Powell',
    title: 'Power Clean for reps',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_Power Clean for reps.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_Power Clean for reps.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_Power Clean for reps_thumb.jpg'
  },
  {
    id: 21,
    athlete: 'Asafa Powell',
    title: 'Power Clean to front squat for reps',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Asafa Powell_100m,200m_Power Clean to front squat for reps.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m,200m_Power Clean to front squat for reps.mp4',
    poster: '/videos/exercises/Asafa Powell_100m,200m_Power Clean to front squat for reps_thumb.jpg'
  },
  {
    id: 22,
    athlete: 'Asafa Powell',
    title: ' Bench Press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_ Bench Press.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_ Bench Press.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_ Bench Press_thumb.jpg'
  },
  {
    id: 23,
    athlete: 'Asafa Powell',
    title: '4 repetitive broad jumps',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_4 repetitive broad jumps.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_4 repetitive broad jumps.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_4 repetitive broad jumps_thumb.jpg'
  },
  {
    id: 24,
    athlete: 'Asafa Powell',
    title: 'Block Start Sprint (1)',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Block Start Sprint (1).mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Block Start Sprint (1).mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Block Start Sprint (1)_thumb.jpg'
  },
  {
    id: 25,
    athlete: 'Asafa Powell',
    title: 'Block Start Sprint',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Block Start Sprint.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Block Start Sprint.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Block Start Sprint_thumb.jpg'
  },
  {
    id: 26,
    athlete: 'Asafa Powell',
    title: 'Block Start Sprinting',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Block Start Sprinting.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Block Start Sprinting.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Block Start Sprinting_thumb.jpg'
  },
  {
    id: 27,
    athlete: 'Asafa Powell',
    title: 'Box Jumps',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Box Jumps.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Box Jumps.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Box Jumps_thumb.jpg'
  },
  {
    id: 28,
    athlete: 'Asafa Powell',
    title: 'Box Squat',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Box Squat.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Box Squat.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Box Squat_thumb.jpg'
  },
  {
    id: 29,
    athlete: 'Asafa Powell',
    title: 'Cable Hip Extensions',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Cable Hip Extensions.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Cable Hip Extensions.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Cable Hip Extensions_thumb.jpg'
  },
  {
    id: 30,
    athlete: 'Asafa Powell',
    title: 'Front Squat',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Front Squat.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Front Squat.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Front Squat_thumb.jpg'
  },
  {
    id: 31,
    athlete: 'Asafa Powell',
    title: 'High Knees',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_High Knees.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_High Knees.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_High Knees_thumb.jpg'
  },
  {
    id: 32,
    athlete: 'Asafa Powell',
    title: 'Hurdle Jumps',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Hurdle Jumps.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Hurdle Jumps.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Hurdle Jumps_thumb.jpg'
  },
  {
    id: 33,
    athlete: 'Asafa Powell',
    title: 'Hurdle Step Over',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Hurdle Step Over.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Hurdle Step Over.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Hurdle Step Over_thumb.jpg'
  },
  {
    id: 34,
    athlete: 'Asafa Powell',
    title: 'Leg Press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Leg Press.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Leg Press.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Leg Press_thumb.jpg'
  },
  {
    id: 35,
    athlete: 'Asafa Powell',
    title: 'Medicine Ball V Up',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Medicine Ball V Up.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Medicine Ball V Up.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Medicine Ball V Up_thumb.jpg'
  },
  {
    id: 36,
    athlete: 'Asafa Powell',
    title: 'Power Clean to front squat catch',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Power Clean to front squat catch.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Power Clean to front squat catch.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Power Clean to front squat catch_thumb.jpg'
  },
  {
    id: 37,
    athlete: 'Asafa Powell',
    title: 'Power Clean to front squat for reps',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Power Clean to front squat for reps.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Power Clean to front squat for reps.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Power Clean to front squat for reps_thumb.jpg'
  },
  {
    id: 38,
    athlete: 'Asafa Powell',
    title: 'Power clean with front squat catch (1)',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch (1).mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch (1).mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch (1)_thumb.jpg'
  },
  {
    id: 39,
    athlete: 'Asafa Powell',
    title: 'Power clean with front squat catch(1) ',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch(1) .mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch(1) .mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch(1) _thumb.jpg'
  },
  {
    id: 40,
    athlete: 'Asafa Powell',
    title: 'Power clean with front squat catch',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Power clean with front squat catch_thumb.jpg'
  },
  {
    id: 41,
    athlete: 'Asafa Powell',
    title: 'Repetitive Hang Cleans',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Repetitive Hang Cleans.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Repetitive Hang Cleans.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Repetitive Hang Cleans_thumb.jpg'
  },
  {
    id: 42,
    athlete: 'Asafa Powell',
    title: 'Resisted Sprinting',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Resisted Sprinting.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Resisted Sprinting.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Resisted Sprinting_thumb.jpg'
  },
  {
    id: 43,
    athlete: 'Asafa Powell',
    title: 'Sprinting',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Sprinting.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Sprinting.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Sprinting_thumb.jpg'
  },
  {
    id: 44,
    athlete: 'Asafa Powell',
    title: 'Yoga Ball V Up Hands to Legs Catch',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Asafa Powell_100m_Yoga Ball V Up Hands to Legs Catch.mp4',
    videoURL_360p: '/videos/exercises/Asafa Powell_100m_Yoga Ball V Up Hands to Legs Catch.mp4',
    poster: '/videos/exercises/Asafa Powell_100m_Yoga Ball V Up Hands to Legs Catch_thumb.jpg'
  },
  {
    id: 45,
    athlete: 'Boots Ennis',
    title: '1 1 Overhand 4 L step exit',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_1 1 Overhand 4 L step exit.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_1 1 Overhand 4 L step exit.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_1 1 Overhand 4 L step exit_thumb.jpg'
  },
  {
    id: 46,
    athlete: 'Boots Ennis',
    title: '1 1 Overhand Pivot off',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_1 1 Overhand Pivot off.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_1 1 Overhand Pivot off.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_1 1 Overhand Pivot off_thumb.jpg'
  },
  {
    id: 47,
    athlete: 'Boots Ennis',
    title: '1 2 1 2 Combo',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_1 2 1 2 Combo.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_1 2 1 2 Combo.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_1 2 1 2 Combo_thumb.jpg'
  },
  {
    id: 48,
    athlete: 'Boots Ennis',
    title: '1 2 3 4 Then 4 hooks',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_1 2 3 4 Then 4 hooks.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_1 2 3 4 Then 4 hooks.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_1 2 3 4 Then 4 hooks_thumb.jpg'
  },
  {
    id: 49,
    athlete: 'Boots Ennis',
    title: '1 2 3 Pivot Off 1 1 exit',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_1 2 3 Pivot Off 1 1 exit.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_1 2 3 Pivot Off 1 1 exit.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_1 2 3 Pivot Off 1 1 exit_thumb.jpg'
  },
  {
    id: 50,
    athlete: 'Boots Ennis',
    title: '1 2 3 Pivot Off',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_1 2 3 Pivot Off.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_1 2 3 Pivot Off.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_1 2 3 Pivot Off_thumb.jpg'
  },
  {
    id: 51,
    athlete: 'Boots Ennis',
    title: '2 3 roll 4B safe exit',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_2 3 roll 4B safe exit.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_2 3 roll 4B safe exit.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_2 3 roll 4B safe exit_thumb.jpg'
  },
  {
    id: 52,
    athlete: 'Boots Ennis',
    title: 'Drill 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Drill 1.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Drill 1.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Drill 1_thumb.jpg'
  },
  {
    id: 53,
    athlete: 'Boots Ennis',
    title: 'Drill 2',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Drill 2.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Drill 2.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Drill 2_thumb.jpg'
  },
  {
    id: 54,
    athlete: 'Boots Ennis',
    title: 'Hand Post Combo Pivot Off',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Hand Post Combo Pivot Off.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Hand Post Combo Pivot Off.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Hand Post Combo Pivot Off_thumb.jpg'
  },
  {
    id: 55,
    athlete: 'Boots Ennis',
    title: 'Heavy Bag 1 2 3 3B 3',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag 1 2 3 3B 3.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag 1 2 3 3B 3.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag 1 2 3 3B 3_thumb.jpg'
  },
  {
    id: 56,
    athlete: 'Boots Ennis',
    title: 'Heavy Bag 2 Shift 1 2 3 4 Double',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag 2 Shift 1 2 3 4 Double.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag 2 Shift 1 2 3 4 Double.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag 2 Shift 1 2 3 4 Double_thumb.jpg'
  },
  {
    id: 57,
    athlete: 'Boots Ennis',
    title: 'Heavy Bag Four Lead Hook Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag Four Lead Hook Drill.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag Four Lead Hook Drill.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Heavy Bag Four Lead Hook Drill_thumb.jpg'
  },
  {
    id: 58,
    athlete: 'Boots Ennis',
    title: 'Pivot and Angles',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Pivot and Angles.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Pivot and Angles.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Pivot and Angles_thumb.jpg'
  },
  {
    id: 59,
    athlete: 'Boots Ennis',
    title: 'Pivot Hook and L step drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Pivot Hook and L step drill.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Pivot Hook and L step drill.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Pivot Hook and L step drill_thumb.jpg'
  },
  {
    id: 60,
    athlete: 'Boots Ennis',
    title: 'Pivot of to second set after Double 3 ',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Pivot of to second set after Double 3 .mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Pivot of to second set after Double 3 .mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Pivot of to second set after Double 3 _thumb.jpg'
  },
  {
    id: 61,
    athlete: 'Boots Ennis',
    title: 'Pivot one way 3 shoots back other way',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Pivot one way 3 shoots back other way.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Pivot one way 3 shoots back other way.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Pivot one way 3 shoots back other way_thumb.jpg'
  },
  {
    id: 62,
    athlete: 'Boots Ennis',
    title: 'Timing the bag for body shots and angles',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Timing the bag for body shots and angles.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Timing the bag for body shots and angles.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Timing the bag for body shots and angles_thumb.jpg'
  },
  {
    id: 63,
    athlete: 'Boots Ennis',
    title: 'timing the bag on jab 2 then L step',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_timing the bag on jab 2 then L step.mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_timing the bag on jab 2 then L step.mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_timing the bag on jab 2 then L step_thumb.jpg'
  },
  {
    id: 64,
    athlete: 'Boots Ennis',
    title: 'Trn the wheel after body shot athen second set ',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Boots Ennis_Boxing_Trn the wheel after body shot athen second set .mp4',
    videoURL_360p: '/videos/exercises/Boots Ennis_Boxing_Trn the wheel after body shot athen second set .mp4',
    poster: '/videos/exercises/Boots Ennis_Boxing_Trn the wheel after body shot athen second set _thumb.jpg'
  },
  {
    id: 65,
    athlete: 'David Benavidez',
    title: '1 2 3 Pivot Left-1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/David Benavidez_Boxing_1 2 3 Pivot Left-1.mp4',
    videoURL_360p: '/videos/exercises/David Benavidez_Boxing_1 2 3 Pivot Left-1.mp4',
    poster: '/videos/exercises/David Benavidez_Boxing_1 2 3 Pivot Left-1_thumb.jpg'
  },
  {
    id: 66,
    athlete: 'Dmitry Bivol',
    title: 'Alternating Medicine Ball Push Ups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Alternating Medicine Ball Push Ups.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Alternating Medicine Ball Push Ups.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Alternating Medicine Ball Push Ups_thumb.jpg'
  },
  {
    id: 67,
    athlete: 'Dmitry Bivol',
    title: 'Band Assisted Explosive Pushups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Band Assisted Explosive Pushups.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Band Assisted Explosive Pushups.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Band Assisted Explosive Pushups_thumb.jpg'
  },
  {
    id: 68,
    athlete: 'Dmitry Bivol',
    title: 'Box Jump',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Box Jump.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Box Jump.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Box Jump_thumb.jpg'
  },
  {
    id: 69,
    athlete: 'Dmitry Bivol',
    title: 'Clap Pushups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Clap Pushups.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Clap Pushups.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Clap Pushups_thumb.jpg'
  },
  {
    id: 70,
    athlete: 'Dmitry Bivol',
    title: 'Crunch Dumbell Twists',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Crunch Dumbell Twists.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Crunch Dumbell Twists.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Crunch Dumbell Twists_thumb.jpg'
  },
  {
    id: 71,
    athlete: 'Dmitry Bivol',
    title: 'Crunch Rotations With Partner Pushing',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Crunch Rotations With Partner Pushing.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Crunch Rotations With Partner Pushing.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Crunch Rotations With Partner Pushing_thumb.jpg'
  },
  {
    id: 72,
    athlete: 'Dmitry Bivol',
    title: 'Dead Bug Dumbell Row',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Dead Bug Dumbell Row.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Dead Bug Dumbell Row.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Dead Bug Dumbell Row_thumb.jpg'
  },
  {
    id: 73,
    athlete: 'Dmitry Bivol',
    title: 'Dip Bar Explosive Knee Drives With Push',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Dip Bar Explosive Knee Drives With Push.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Dip Bar Explosive Knee Drives With Push.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Dip Bar Explosive Knee Drives With Push_thumb.jpg'
  },
  {
    id: 74,
    athlete: 'Dmitry Bivol',
    title: 'Dumbell Bench Press Explosive',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Dumbell Bench Press Explosive.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Dumbell Bench Press Explosive.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Dumbell Bench Press Explosive_thumb.jpg'
  },
  {
    id: 75,
    athlete: 'Dmitry Bivol',
    title: 'Explosive Puush Ups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Explosive Puush Ups.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Explosive Puush Ups.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Explosive Puush Ups_thumb.jpg'
  },
  {
    id: 76,
    athlete: 'Dmitry Bivol',
    title: 'Flying Cards Catching',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Flying Cards Catching.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Flying Cards Catching.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Flying Cards Catching_thumb.jpg'
  },
  {
    id: 77,
    athlete: 'Dmitry Bivol',
    title: 'Hand Exercise',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Hand Exercise.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Hand Exercise.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Hand Exercise_thumb.jpg'
  },
  {
    id: 78,
    athlete: 'Dmitry Bivol',
    title: 'Isometric Band Holds',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Isometric Band Holds.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Isometric Band Holds.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Isometric Band Holds_thumb.jpg'
  },
  {
    id: 79,
    athlete: 'Dmitry Bivol',
    title: 'Isometric Hook',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Isometric Hook.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Isometric Hook.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Isometric Hook_thumb.jpg'
  },
  {
    id: 80,
    athlete: 'Dmitry Bivol',
    title: 'Kettlbell Core Stabilty',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Kettlbell Core Stabilty.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Kettlbell Core Stabilty.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Kettlbell Core Stabilty_thumb.jpg'
  },
  {
    id: 81,
    athlete: 'Dmitry Bivol',
    title: 'Lateral Hops',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Lateral Hops.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Lateral Hops.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Lateral Hops_thumb.jpg'
  },
  {
    id: 82,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Crunch Hooks 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Crunch Hooks 1.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Crunch Hooks 1.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Crunch Hooks 1_thumb.jpg'
  },
  {
    id: 83,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Crunch Hooks',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Crunch Hooks.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Crunch Hooks.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Crunch Hooks_thumb.jpg'
  },
  {
    id: 84,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Explosive',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Explosive.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Explosive.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Explosive_thumb.jpg'
  },
  {
    id: 85,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Slams',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Slams.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Slams.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Slams_thumb.jpg'
  },
  {
    id: 86,
    athlete: 'Dmitry Bivol',
    title: 'Medicine Ball Wall Throws',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Wall Throws.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Wall Throws.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Medicine Ball Wall Throws_thumb.jpg'
  },
  {
    id: 87,
    athlete: 'Dmitry Bivol',
    title: 'Plank Rotations',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Plank Rotations.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Plank Rotations.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Plank Rotations_thumb.jpg'
  },
  {
    id: 88,
    athlete: 'Dmitry Bivol',
    title: 'Plank Walkovers',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Plank Walkovers.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Plank Walkovers.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Plank Walkovers_thumb.jpg'
  },
  {
    id: 89,
    athlete: 'Dmitry Bivol',
    title: 'Push Ups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Push Ups.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Push Ups.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Push Ups_thumb.jpg'
  },
  {
    id: 90,
    athlete: 'Dmitry Bivol',
    title: 'Rock Slams',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Rock Slams.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Rock Slams.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Rock Slams_thumb.jpg'
  },
  {
    id: 91,
    athlete: 'Dmitry Bivol',
    title: 'Rock Throw and Catch',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Rock Throw and Catch.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Rock Throw and Catch.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Rock Throw and Catch_thumb.jpg'
  },
  {
    id: 92,
    athlete: 'Dmitry Bivol',
    title: 'Roman Chair Medicine Ball Slams 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Roman Chair Medicine Ball Slams 1.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Roman Chair Medicine Ball Slams 1.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Roman Chair Medicine Ball Slams 1_thumb.jpg'
  },
  {
    id: 93,
    athlete: 'Dmitry Bivol',
    title: 'Roman Chair Medicine Ball Slams',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Roman Chair Medicine Ball Slams.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Roman Chair Medicine Ball Slams.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Roman Chair Medicine Ball Slams_thumb.jpg'
  },
  {
    id: 94,
    athlete: 'Dmitry Bivol',
    title: 'Rope Swings',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Rope Swings.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Rope Swings.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Rope Swings_thumb.jpg'
  },
  {
    id: 95,
    athlete: 'Dmitry Bivol',
    title: 'Row to punches',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Row to punches.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Row to punches.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Row to punches_thumb.jpg'
  },
  {
    id: 96,
    athlete: 'Dmitry Bivol',
    title: 'Seated Medicine Ball Swing Slams',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Seated Medicine Ball Swing Slams.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Seated Medicine Ball Swing Slams.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Seated Medicine Ball Swing Slams_thumb.jpg'
  },
  {
    id: 97,
    athlete: 'Dmitry Bivol',
    title: 'Shoulder Mobility 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Mobility 1.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Mobility 1.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Mobility 1_thumb.jpg'
  },
  {
    id: 98,
    athlete: 'Dmitry Bivol',
    title: 'Shoulder Mobility',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Mobility.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Mobility.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Mobility_thumb.jpg'
  },
  {
    id: 99,
    athlete: 'Dmitry Bivol',
    title: 'Shoulder Pushing Exercise',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Pushing Exercise.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Pushing Exercise.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Shoulder Pushing Exercise_thumb.jpg'
  },
  {
    id: 100,
    athlete: 'Dmitry Bivol',
    title: 'Single Arm Alternating Rock Throw and Catch',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Single Arm Alternating Rock Throw and Catch.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Single Arm Alternating Rock Throw and Catch.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Single Arm Alternating Rock Throw and Catch_thumb.jpg'
  },
  {
    id: 101,
    athlete: 'Dmitry Bivol',
    title: 'Single Leg Jump Medcine Ball Slams',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Single Leg Jump Medcine Ball Slams.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Single Leg Jump Medcine Ball Slams.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Single Leg Jump Medcine Ball Slams_thumb.jpg'
  },
  {
    id: 102,
    athlete: 'Dmitry Bivol',
    title: 'Sit Ups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Sit Ups.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Sit Ups.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Sit Ups_thumb.jpg'
  },
  {
    id: 103,
    athlete: 'Dmitry Bivol',
    title: 'Skate Ankle Stability',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Skate Ankle Stability.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Skate Ankle Stability.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Skate Ankle Stability_thumb.jpg'
  },
  {
    id: 104,
    athlete: 'Dmitry Bivol',
    title: 'V Ups 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_V Ups 1.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_V Ups 1.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_V Ups 1_thumb.jpg'
  },
  {
    id: 105,
    athlete: 'Dmitry Bivol',
    title: 'V Ups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_V Ups.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_V Ups.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_V Ups_thumb.jpg'
  },
  {
    id: 106,
    athlete: 'Dmitry Bivol',
    title: 'Yoga Ball Plank CIrcles',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Dmitry Bivol_Boxing_Yoga Ball Plank CIrcles.mp4',
    videoURL_360p: '/videos/exercises/Dmitry Bivol_Boxing_Yoga Ball Plank CIrcles.mp4',
    poster: '/videos/exercises/Dmitry Bivol_Boxing_Yoga Ball Plank CIrcles_thumb.jpg'
  },
  {
    id: 107,
    athlete: 'Donovan Mitchell',
    title: 'Agility Drill 1',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Agility Drill 1.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Agility Drill 1.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Agility Drill 1_thumb.jpg'
  },
  {
    id: 108,
    athlete: 'Donovan Mitchell',
    title: 'Agility Drill 2',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Agility Drill 2.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Agility Drill 2.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Agility Drill 2_thumb.jpg'
  },
  {
    id: 109,
    athlete: 'Donovan Mitchell',
    title: 'Cardio climbers 1',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Cardio climbers 1.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Cardio climbers 1.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Cardio climbers 1_thumb.jpg'
  },
  {
    id: 110,
    athlete: 'Donovan Mitchell',
    title: 'Cardio climbers 2',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Cardio climbers 2.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Cardio climbers 2.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Cardio climbers 2_thumb.jpg'
  },
  {
    id: 111,
    athlete: 'Donovan Mitchell',
    title: 'Cardio exercise on machine',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Cardio exercise on machine.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Cardio exercise on machine.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Cardio exercise on machine_thumb.jpg'
  },
  {
    id: 112,
    athlete: 'Donovan Mitchell',
    title: 'Lateral Movements',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Lateral Movements.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Lateral Movements.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Lateral Movements_thumb.jpg'
  },
  {
    id: 113,
    athlete: 'Donovan Mitchell',
    title: 'Nordic Hamstring Curls',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Nordic Hamstring Curls.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Nordic Hamstring Curls.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Nordic Hamstring Curls_thumb.jpg'
  },
  {
    id: 114,
    athlete: 'Donovan Mitchell',
    title: 'Push ups',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Push ups.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Push ups.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Push ups_thumb.jpg'
  },
  {
    id: 115,
    athlete: 'Donovan Mitchell',
    title: 'Resisted Backwards Run',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Resisted Backwards Run.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Resisted Backwards Run.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Resisted Backwards Run_thumb.jpg'
  },
  {
    id: 116,
    athlete: 'Donovan Mitchell',
    title: 'Single leg Box jump with single leg landing',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Single leg Box jump with single leg landing.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Single leg Box jump with single leg landing.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Single leg Box jump with single leg landing_thumb.jpg'
  },
  {
    id: 117,
    athlete: 'Donovan Mitchell',
    title: 'Skaters',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Skaters.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Skaters.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Skaters_thumb.jpg'
  },
  {
    id: 118,
    athlete: 'Donovan Mitchell',
    title: 'Sled Pushing',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Sled Pushing.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Sled Pushing.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Sled Pushing_thumb.jpg'
  },
  {
    id: 119,
    athlete: 'Donovan Mitchell',
    title: 'Yoga ball plank',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Donovan Mitchell_Basketball_Yoga ball plank.mp4',
    videoURL_360p: '/videos/exercises/Donovan Mitchell_Basketball_Yoga ball plank.mp4',
    poster: '/videos/exercises/Donovan Mitchell_Basketball_Yoga ball plank_thumb.jpg'
  },
  {
    id: 120,
    athlete: 'Dwyane Wade',
    title: 'Depth Jump',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Dwyane Wade_Basketball_Depth Jump.mp4',
    videoURL_360p: '/videos/exercises/Dwyane Wade_Basketball_Depth Jump.mp4',
    poster: '/videos/exercises/Dwyane Wade_Basketball_Depth Jump_thumb.jpg'
  },
  {
    id: 121,
    athlete: 'Femke Bol',
    title: 'HAng Clean',
    athletesSports: '400m,400m hurdles',
    videoURL: '/videos/exercises/Femke Bol_400m,400m hurdles_HAng Clean.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m,400m hurdles_HAng Clean.mp4',
    poster: '/videos/exercises/Femke Bol_400m,400m hurdles_HAng Clean_thumb.jpg'
  },
  {
    id: 122,
    athlete: 'Femke Bol',
    title: '3 step to jump simulation (1)',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_3 step to jump simulation (1).mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_3 step to jump simulation (1).mp4',
    poster: '/videos/exercises/Femke Bol_400m_3 step to jump simulation (1)_thumb.jpg'
  },
  {
    id: 123,
    athlete: 'Femke Bol',
    title: '3 step to jump simulation',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_3 step to jump simulation.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_3 step to jump simulation.mp4',
    poster: '/videos/exercises/Femke Bol_400m_3 step to jump simulation_thumb.jpg'
  },
  {
    id: 124,
    athlete: 'Femke Bol',
    title: '3 steps to jump simulation',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_3 steps to jump simulation.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_3 steps to jump simulation.mp4',
    poster: '/videos/exercises/Femke Bol_400m_3 steps to jump simulation_thumb.jpg'
  },
  {
    id: 125,
    athlete: 'Femke Bol',
    title: 'Assisted Pull ups',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Assisted Pull ups.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Assisted Pull ups.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Assisted Pull ups_thumb.jpg'
  },
  {
    id: 126,
    athlete: 'Femke Bol',
    title: 'Banded Hip Circles',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Banded Hip Circles.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Banded Hip Circles.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Banded Hip Circles_thumb.jpg'
  },
  {
    id: 127,
    athlete: 'Femke Bol',
    title: 'Banded Leg Pushofs',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Banded Leg Pushofs.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Banded Leg Pushofs.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Banded Leg Pushofs_thumb.jpg'
  },
  {
    id: 128,
    athlete: 'Femke Bol',
    title: 'Bounding to Long Jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Bounding to Long Jumps.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Bounding to Long Jumps.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Bounding to Long Jumps_thumb.jpg'
  },
  {
    id: 129,
    athlete: 'Femke Bol',
    title: 'Bycycle  Driving',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Bycycle  Driving.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Bycycle  Driving.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Bycycle  Driving_thumb.jpg'
  },
  {
    id: 130,
    athlete: 'Femke Bol',
    title: 'Dumbell Kettlebel Drive',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Dumbell Kettlebel Drive.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Dumbell Kettlebel Drive.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Dumbell Kettlebel Drive_thumb.jpg'
  },
  {
    id: 131,
    athlete: 'Femke Bol',
    title: 'Forward Curtsy Lunge simulation',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Forward Curtsy Lunge simulation.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Forward Curtsy Lunge simulation.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Forward Curtsy Lunge simulation_thumb.jpg'
  },
  {
    id: 132,
    athlete: 'Femke Bol',
    title: 'Front Squat (1)',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Front Squat (1).mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Front Squat (1).mp4',
    poster: '/videos/exercises/Femke Bol_400m_Front Squat (1)_thumb.jpg'
  },
  {
    id: 133,
    athlete: 'Femke Bol',
    title: 'Front Squat',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Front Squat.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Front Squat.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Front Squat_thumb.jpg'
  },
  {
    id: 134,
    athlete: 'Femke Bol',
    title: 'Hang Clean (1)',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Hang Clean (1).mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Hang Clean (1).mp4',
    poster: '/videos/exercises/Femke Bol_400m_Hang Clean (1)_thumb.jpg'
  },
  {
    id: 135,
    athlete: 'Femke Bol',
    title: 'Hang Clean(2)',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Hang Clean(2).mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Hang Clean(2).mp4',
    poster: '/videos/exercises/Femke Bol_400m_Hang Clean(2)_thumb.jpg'
  },
  {
    id: 136,
    athlete: 'Femke Bol',
    title: 'Hang Clean',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Hang Clean.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Hang Clean.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Hang Clean_thumb.jpg'
  },
  {
    id: 137,
    athlete: 'Femke Bol',
    title: 'Hang Cleans',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Hang Cleans.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Hang Cleans.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Hang Cleans_thumb.jpg'
  },
  {
    id: 138,
    athlete: 'Femke Bol',
    title: 'Hurdle Jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Hurdle Jumps.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Hurdle Jumps.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Hurdle Jumps_thumb.jpg'
  },
  {
    id: 139,
    athlete: 'Femke Bol',
    title: 'Kneeling Snatch with Knee Drive Simulation',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Kneeling Snatch with Knee Drive Simulation.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Kneeling Snatch with Knee Drive Simulation.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Kneeling Snatch with Knee Drive Simulation_thumb.jpg'
  },
  {
    id: 140,
    athlete: 'Femke Bol',
    title: 'Power Clean (2)',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Power Clean (2).mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Power Clean (2).mp4',
    poster: '/videos/exercises/Femke Bol_400m_Power Clean (2)_thumb.jpg'
  },
  {
    id: 141,
    athlete: 'Femke Bol',
    title: 'Power Clean (3)',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Power Clean (3).mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Power Clean (3).mp4',
    poster: '/videos/exercises/Femke Bol_400m_Power Clean (3)_thumb.jpg'
  },
  {
    id: 142,
    athlete: 'Femke Bol',
    title: 'Power CLean from Box',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Power CLean from Box.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Power CLean from Box.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Power CLean from Box_thumb.jpg'
  },
  {
    id: 143,
    athlete: 'Femke Bol',
    title: 'Power Clean(1)',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Power Clean(1).mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Power Clean(1).mp4',
    poster: '/videos/exercises/Femke Bol_400m_Power Clean(1)_thumb.jpg'
  },
  {
    id: 144,
    athlete: 'Femke Bol',
    title: 'Power clean',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Power clean.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Power clean.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Power clean_thumb.jpg'
  },
  {
    id: 145,
    athlete: 'Femke Bol',
    title: 'Power cleaning',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Power cleaning.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Power cleaning.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Power cleaning_thumb.jpg'
  },
  {
    id: 146,
    athlete: 'Femke Bol',
    title: 'Power Cleans',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Power Cleans.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Power Cleans.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Power Cleans_thumb.jpg'
  },
  {
    id: 147,
    athlete: 'Femke Bol',
    title: 'Repetitive Hang Snatches',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Repetitive Hang Snatches.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Repetitive Hang Snatches.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Repetitive Hang Snatches_thumb.jpg'
  },
  {
    id: 148,
    athlete: 'Femke Bol',
    title: 'Single leg Box Step up jump',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Single leg Box Step up jump.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Single leg Box Step up jump.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Single leg Box Step up jump_thumb.jpg'
  },
  {
    id: 149,
    athlete: 'Femke Bol',
    title: 'Single leg glute bridge variation',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Single leg glute bridge variation.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Single leg glute bridge variation.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Single leg glute bridge variation_thumb.jpg'
  },
  {
    id: 150,
    athlete: 'Femke Bol',
    title: 'Single Leg Hip Thrusts',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Single Leg Hip Thrusts.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Single Leg Hip Thrusts.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Single Leg Hip Thrusts_thumb.jpg'
  },
  {
    id: 151,
    athlete: 'Femke Bol',
    title: 'Single Leg jump variation',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Single Leg jump variation.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Single Leg jump variation.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Single Leg jump variation_thumb.jpg'
  },
  {
    id: 152,
    athlete: 'Femke Bol',
    title: 'Single Leg RDL',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Single Leg RDL.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Single Leg RDL.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Single Leg RDL_thumb.jpg'
  },
  {
    id: 153,
    athlete: 'Femke Bol',
    title: 'Split Squat to Knee Drive on Box',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Split Squat to Knee Drive on Box.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Split Squat to Knee Drive on Box.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Split Squat to Knee Drive on Box_thumb.jpg'
  },
  {
    id: 154,
    athlete: 'Femke Bol',
    title: 'Split Squat',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Split Squat.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Split Squat.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Split Squat_thumb.jpg'
  },
  {
    id: 155,
    athlete: 'Femke Bol',
    title: 'Step up jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Step up jumps.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Step up jumps.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Step up jumps_thumb.jpg'
  },
  {
    id: 156,
    athlete: 'Femke Bol',
    title: 'Step up',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Step up.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Step up.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Step up_thumb.jpg'
  },
  {
    id: 157,
    athlete: 'Femke Bol',
    title: 'Yoga Ball Horizontal Knee Drive',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Femke Bol_400m_Yoga Ball Horizontal Knee Drive.mp4',
    videoURL_360p: '/videos/exercises/Femke Bol_400m_Yoga Ball Horizontal Knee Drive.mp4',
    poster: '/videos/exercises/Femke Bol_400m_Yoga Ball Horizontal Knee Drive_thumb.jpg'
  },
  {
    id: 158,
    athlete: 'Fran Sands',
    title: 'Angled Side Steps',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Angled Side Steps.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Angled Side Steps.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Angled Side Steps_thumb.jpg'
  },
  {
    id: 159,
    athlete: 'Fran Sands',
    title: 'Double Jab and Move',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Double Jab and Move.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Double Jab and Move.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Double Jab and Move_thumb.jpg'
  },
  {
    id: 160,
    athlete: 'Fran Sands',
    title: 'Double Jab',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Double Jab.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Double Jab.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Double Jab_thumb.jpg'
  },
  {
    id: 161,
    athlete: 'Fran Sands',
    title: 'Jab And Move',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab And Move.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab And Move.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab And Move_thumb.jpg'
  },
  {
    id: 162,
    athlete: 'Fran Sands',
    title: 'Jab Angled Side Step Jab Cross',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Angled Side Step Jab Cross.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Angled Side Step Jab Cross.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Angled Side Step Jab Cross_thumb.jpg'
  },
  {
    id: 163,
    athlete: 'Fran Sands',
    title: 'Jab Cross and Move Forward and Backwards',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move Forward and Backwards.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move Forward and Backwards.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move Forward and Backwards_thumb.jpg'
  },
  {
    id: 164,
    athlete: 'Fran Sands',
    title: 'Jab Cross and Move with Pivot Hook and Basic Hook',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Hook and Basic Hook.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Hook and Basic Hook.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Hook and Basic Hook_thumb.jpg'
  },
  {
    id: 165,
    athlete: 'Fran Sands',
    title: 'Jab Cross and Move with Pivot Left and Right Uppercuts',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Left and Right Uppercuts.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Left and Right Uppercuts.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Left and Right Uppercuts_thumb.jpg'
  },
  {
    id: 166,
    athlete: 'Fran Sands',
    title: 'Jab Cross and Move with Pivot Left and Right',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Left and Right.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Left and Right.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move with Pivot Left and Right_thumb.jpg'
  },
  {
    id: 167,
    athlete: 'Fran Sands',
    title: 'Jab Cross and Move',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross and Move_thumb.jpg'
  },
  {
    id: 168,
    athlete: 'Fran Sands',
    title: 'Jab Cross Left Hook and Move',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook and Move.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook and Move.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook and Move_thumb.jpg'
  },
  {
    id: 169,
    athlete: 'Fran Sands',
    title: 'Jab Cross Left Hook Right Hook and Move',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook Right Hook and Move.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook Right Hook and Move.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook Right Hook and Move_thumb.jpg'
  },
  {
    id: 170,
    athlete: 'Fran Sands',
    title: 'Jab Cross Left Hook Right Hook',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook Right Hook.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook Right Hook.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook Right Hook_thumb.jpg'
  },
  {
    id: 171,
    athlete: 'Fran Sands',
    title: 'Jab Cross Left Hook',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross Left Hook_thumb.jpg'
  },
  {
    id: 172,
    athlete: 'Fran Sands',
    title: 'Jab Cross',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab Cross.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab Cross.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab Cross_thumb.jpg'
  },
  {
    id: 173,
    athlete: 'Fran Sands',
    title: 'Jab',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Jab.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Jab.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Jab_thumb.jpg'
  },
  {
    id: 174,
    athlete: 'Fran Sands',
    title: 'Stance Switch With Upeprcut and Hook',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Stance Switch With Upeprcut and Hook.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Stance Switch With Upeprcut and Hook.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Stance Switch With Upeprcut and Hook_thumb.jpg'
  },
  {
    id: 175,
    athlete: 'Fran Sands',
    title: 'Stance Switch With Upeprcuts',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Stance Switch With Upeprcuts.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Stance Switch With Upeprcuts.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Stance Switch With Upeprcuts_thumb.jpg'
  },
  {
    id: 176,
    athlete: 'Fran Sands',
    title: 'Stance Switch',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Fran Sands_Boxing_Stance Switch.mp4',
    videoURL_360p: '/videos/exercises/Fran Sands_Boxing_Stance Switch.mp4',
    poster: '/videos/exercises/Fran Sands_Boxing_Stance Switch_thumb.jpg'
  },
  {
    id: 177,
    athlete: 'Frederick Richard',
    title: 'Nordic Hamstring Curl',
    athletesSports: 'Gymnastics',
    videoURL: '/videos/exercises/Frederick Richard_Gymnastics_Nordic Hamstring Curl.mp4',
    videoURL_360p: '/videos/exercises/Frederick Richard_Gymnastics_Nordic Hamstring Curl.mp4',
    poster: '/videos/exercises/Frederick Richard_Gymnastics_Nordic Hamstring Curl_thumb.jpg'
  },
  {
    id: 178,
    athlete: 'Gennady Golovkin',
    title: 'Crunches With Twist',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Crunches With Twist.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Crunches With Twist.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Crunches With Twist_thumb.jpg'
  },
  {
    id: 179,
    athlete: 'Gennady Golovkin',
    title: 'Crunches',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Crunches.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Crunches.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Crunches_thumb.jpg'
  },
  {
    id: 180,
    athlete: 'Gennady Golovkin',
    title: 'Explosive Presses',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Explosive Presses.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Explosive Presses.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Explosive Presses_thumb.jpg'
  },
  {
    id: 181,
    athlete: 'Gennady Golovkin',
    title: 'Knee Partial Push Ups',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Knee Partial Push Ups.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Knee Partial Push Ups.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Knee Partial Push Ups_thumb.jpg'
  },
  {
    id: 182,
    athlete: 'Gennady Golovkin',
    title: 'Light dumbbells directs',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Light dumbbells directs.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Light dumbbells directs.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Light dumbbells directs_thumb.jpg'
  },
  {
    id: 183,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Backword Circles',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Backword Circles.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Backword Circles.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Backword Circles_thumb.jpg'
  },
  {
    id: 184,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Flys',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Flys.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Flys.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Flys_thumb.jpg'
  },
  {
    id: 185,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Forwarrd Circles',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Forwarrd Circles.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Forwarrd Circles.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Forwarrd Circles_thumb.jpg'
  },
  {
    id: 186,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Ovations',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Ovations.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Ovations.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Ovations_thumb.jpg'
  },
  {
    id: 187,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Shakers',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Shakers.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Shakers.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Shakers_thumb.jpg'
  },
  {
    id: 188,
    athlete: 'Gennady Golovkin',
    title: 'Light Dumbells Vertical Directs',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Vertical Directs.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Vertical Directs.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Light Dumbells Vertical Directs_thumb.jpg'
  },
  {
    id: 189,
    athlete: 'Gennady Golovkin',
    title: 'Medicine Ball Full Squat Jumps',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball Full Squat Jumps.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball Full Squat Jumps.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball Full Squat Jumps_thumb.jpg'
  },
  {
    id: 190,
    athlete: 'Gennady Golovkin',
    title: 'Medicine Ball Jumps',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball Jumps.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball Jumps.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball Jumps_thumb.jpg'
  },
  {
    id: 191,
    athlete: 'Gennady Golovkin',
    title: 'Medicine Ball press jumps',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball press jumps.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball press jumps.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Medicine Ball press jumps_thumb.jpg'
  },
  {
    id: 192,
    athlete: 'Gennady Golovkin',
    title: 'Overhead triceps extensions',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Overhead triceps extensions.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Overhead triceps extensions.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Overhead triceps extensions_thumb.jpg'
  },
  {
    id: 193,
    athlete: 'Gennady Golovkin',
    title: 'Partial reverse crunches',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Partial reverse crunches.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Partial reverse crunches.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Partial reverse crunches_thumb.jpg'
  },
  {
    id: 194,
    athlete: 'Gennady Golovkin',
    title: 'Rope skipping',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Rope skipping.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Rope skipping.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Rope skipping_thumb.jpg'
  },
  {
    id: 195,
    athlete: 'Gennady Golovkin',
    title: 'Shoulder circles to left',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Shoulder circles to left.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Shoulder circles to left.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Shoulder circles to left_thumb.jpg'
  },
  {
    id: 196,
    athlete: 'Gennady Golovkin',
    title: 'Shoulder Elbow Circles',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Shoulder Elbow Circles.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Shoulder Elbow Circles.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Shoulder Elbow Circles_thumb.jpg'
  },
  {
    id: 197,
    athlete: 'Gennady Golovkin',
    title: 'Side Crunches 1',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Side Crunches 1.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Side Crunches 1.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Side Crunches 1_thumb.jpg'
  },
  {
    id: 198,
    athlete: 'Gennady Golovkin',
    title: 'Side Crunches',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Gennady Golovkin_Boxing_Side Crunches.mp4',
    videoURL_360p: '/videos/exercises/Gennady Golovkin_Boxing_Side Crunches.mp4',
    poster: '/videos/exercises/Gennady Golovkin_Boxing_Side Crunches_thumb.jpg'
  },
  {
    id: 199,
    athlete: 'Guillermo Rigondeaux',
    title: '2 5 1 6 ',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Guillermo Rigondeaux_Boxing_2 5 1 6 .mp4',
    videoURL_360p: '/videos/exercises/Guillermo Rigondeaux_Boxing_2 5 1 6 .mp4',
    poster: '/videos/exercises/Guillermo Rigondeaux_Boxing_2 5 1 6 _thumb.jpg'
  },
  {
    id: 200,
    athlete: 'Guillermo Rigondeaux',
    title: '2 5 1 6 ',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Guillermo Rigondeaux_Boxing_2 5 1 6 _360p.mp4',
    videoURL_360p: '/videos/exercises/Guillermo Rigondeaux_Boxing_2 5 1 6 _360p.mp4',
    poster: '/videos/exercises/Guillermo Rigondeaux_Boxing_2 5 1 6 _360p_thumb.jpg'
  },
  {
    id: 201,
    athlete: 'Guillermo Rigondeaux',
    title: 'Lead Hand Free Rear hand Dumbell Dirrect',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Guillermo Rigondeaux_Boxing_Lead Hand Free Rear hand Dumbell Dirrect.mp4',
    videoURL_360p: '/videos/exercises/Guillermo Rigondeaux_Boxing_Lead Hand Free Rear hand Dumbell Dirrect.mp4',
    poster: '/videos/exercises/Guillermo Rigondeaux_Boxing_Lead Hand Free Rear hand Dumbell Dirrect_thumb.jpg'
  },
  {
    id: 202,
    athlete: 'Guillermo Rigondeaux',
    title: '',
    athletesSports: 'Lead Hand Free Rear hand Dumbell Uppercut',
    videoURL: '/videos/exercises/Guillermo Rigondeaux_Lead Hand Free Rear hand Dumbell Uppercut.mp4',
    videoURL_360p: '/videos/exercises/Guillermo Rigondeaux_Lead Hand Free Rear hand Dumbell Uppercut.mp4',
    poster: '/videos/exercises/Guillermo Rigondeaux_Lead Hand Free Rear hand Dumbell Uppercut_thumb.jpg'
  },
  {
    id: 203,
    athlete: 'Ivana Spanovic',
    title: 'Broad Jump',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Broad Jump.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Broad Jump.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Broad Jump_thumb.jpg'
  },
  {
    id: 204,
    athlete: 'Ivana Spanovic',
    title: 'Hurdle Jumps 1',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Hurdle Jumps 1.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Hurdle Jumps 1.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Hurdle Jumps 1_thumb.jpg'
  },
  {
    id: 205,
    athlete: 'Ivana Spanovic',
    title: 'Hurdle Jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Hurdle Jumps.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Hurdle Jumps.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Hurdle Jumps_thumb.jpg'
  },
  {
    id: 206,
    athlete: 'Ivana Spanovic',
    title: 'Medicine Ball Crunches With Throw',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Crunches With Throw.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Crunches With Throw.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Crunches With Throw_thumb.jpg'
  },
  {
    id: 207,
    athlete: 'Ivana Spanovic',
    title: 'Medicine Ball Russian Twist With Throw',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Russian Twist With Throw.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Russian Twist With Throw.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Russian Twist With Throw_thumb.jpg'
  },
  {
    id: 208,
    athlete: 'Ivana Spanovic',
    title: 'Medicine Ball Throw Backwards',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Throw Backwards.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Throw Backwards.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Medicine Ball Throw Backwards_thumb.jpg'
  },
  {
    id: 209,
    athlete: 'Ivana Spanovic',
    title: 'Power Clean 1',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Power Clean 1.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Power Clean 1.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Power Clean 1_thumb.jpg'
  },
  {
    id: 210,
    athlete: 'Ivana Spanovic',
    title: 'Power Clean',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Power Clean.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Power Clean.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Power Clean_thumb.jpg'
  },
  {
    id: 211,
    athlete: 'Ivana Spanovic',
    title: 'Reverse Crunches',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Reverse Crunches.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Reverse Crunches.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Reverse Crunches_thumb.jpg'
  },
  {
    id: 212,
    athlete: 'Ivana Spanovic',
    title: 'Roman Chair Extensions WIth Medicine Ball Throw',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Roman Chair Extensions WIth Medicine Ball Throw.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Roman Chair Extensions WIth Medicine Ball Throw.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Roman Chair Extensions WIth Medicine Ball Throw_thumb.jpg'
  },
  {
    id: 213,
    athlete: 'Ivana Spanovic',
    title: 'Squat Jumps 1',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Squat Jumps 1.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Squat Jumps 1.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Squat Jumps 1_thumb.jpg'
  },
  {
    id: 214,
    athlete: 'Ivana Spanovic',
    title: 'Squat Jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Squat Jumps.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Squat Jumps.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Squat Jumps_thumb.jpg'
  },
  {
    id: 215,
    athlete: 'Ivana Spanovic',
    title: 'Stair Squat Jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Stair Squat Jumps.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Stair Squat Jumps.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Stair Squat Jumps_thumb.jpg'
  },
  {
    id: 216,
    athlete: 'Ivana Spanovic',
    title: 'Stairs Bounding 1',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Stairs Bounding 1.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Stairs Bounding 1.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Stairs Bounding 1_thumb.jpg'
  },
  {
    id: 217,
    athlete: 'Ivana Spanovic',
    title: 'Stairs Bounding',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_Stairs Bounding.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_Stairs Bounding.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_Stairs Bounding_thumb.jpg'
  },
  {
    id: 218,
    athlete: 'Ivana Spanovic',
    title: 'TRX Plank to Handstand Walk',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Ivana Spanovic_Long Jump_TRX Plank to Handstand Walk.mp4',
    videoURL_360p: '/videos/exercises/Ivana Spanovic_Long Jump_TRX Plank to Handstand Walk.mp4',
    poster: '/videos/exercises/Ivana Spanovic_Long Jump_TRX Plank to Handstand Walk_thumb.jpg'
  },
  {
    id: 219,
    athlete: 'Khadi Sagnia',
    title: ' Step up',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_ Step up.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_ Step up.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_ Step up_thumb.jpg'
  },
  {
    id: 220,
    athlete: 'Khadi Sagnia',
    title: 'Alternating Forward Banded Lunge Scissor',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Alternating Forward Banded Lunge Scissor.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Alternating Forward Banded Lunge Scissor.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Alternating Forward Banded Lunge Scissor_thumb.jpg'
  },
  {
    id: 221,
    athlete: 'Khadi Sagnia',
    title: 'Back exercise',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Back exercise.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Back exercise.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Back exercise_thumb.jpg'
  },
  {
    id: 222,
    athlete: 'Khadi Sagnia',
    title: 'Back squat',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Back squat.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Back squat.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Back squat_thumb.jpg'
  },
  {
    id: 223,
    athlete: 'Khadi Sagnia',
    title: 'Back squats',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Back squats.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Back squats.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Back squats_thumb.jpg'
  },
  {
    id: 224,
    athlete: 'Khadi Sagnia',
    title: 'Backward hill hops',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Backward hill hops.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Backward hill hops.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Backward hill hops_thumb.jpg'
  },
  {
    id: 225,
    athlete: 'Khadi Sagnia',
    title: 'Banded Lunge Scissor',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Banded Lunge Scissor.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Banded Lunge Scissor.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Banded Lunge Scissor_thumb.jpg'
  },
  {
    id: 226,
    athlete: 'Khadi Sagnia',
    title: 'Bar leg raises',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bar leg raises.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bar leg raises.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bar leg raises_thumb.jpg'
  },
  {
    id: 227,
    athlete: 'Khadi Sagnia',
    title: 'Belt squats',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Belt squats.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Belt squats.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Belt squats_thumb.jpg'
  },
  {
    id: 228,
    athlete: 'Khadi Sagnia',
    title: 'Bench good mornings',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bench good mornings.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bench good mornings.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bench good mornings_thumb.jpg'
  },
  {
    id: 229,
    athlete: 'Khadi Sagnia',
    title: 'Bench press',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bench press.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bench press.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bench press_thumb.jpg'
  },
  {
    id: 230,
    athlete: 'Khadi Sagnia',
    title: 'Bicycle cruches',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bicycle cruches.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bicycle cruches.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bicycle cruches_thumb.jpg'
  },
  {
    id: 231,
    athlete: 'Khadi Sagnia',
    title: 'Bicycle driving',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bicycle driving.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bicycle driving.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bicycle driving_thumb.jpg'
  },
  {
    id: 232,
    athlete: 'Khadi Sagnia',
    title: 'Bodyweight half squat',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bodyweight half squat.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bodyweight half squat.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bodyweight half squat_thumb.jpg'
  },
  {
    id: 233,
    athlete: 'Khadi Sagnia',
    title: 'Bodyweight squat and curtsy lunge',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bodyweight squat and curtsy lunge.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bodyweight squat and curtsy lunge.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bodyweight squat and curtsy lunge_thumb.jpg'
  },
  {
    id: 234,
    athlete: 'Khadi Sagnia',
    title: 'Box jumps with plate',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Box jumps with plate.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Box jumps with plate.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Box jumps with plate_thumb.jpg'
  },
  {
    id: 235,
    athlete: 'Khadi Sagnia',
    title: 'Box jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Box jumps.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Box jumps.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Box jumps_thumb.jpg'
  },
  {
    id: 236,
    athlete: 'Khadi Sagnia',
    title: 'Broad jump',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Broad jump.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Broad jump.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Broad jump_thumb.jpg'
  },
  {
    id: 237,
    athlete: 'Khadi Sagnia',
    title: 'Broad jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Broad jumps.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Broad jumps.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Broad jumps_thumb.jpg'
  },
  {
    id: 238,
    athlete: 'Khadi Sagnia',
    title: 'Bulgarian split squat',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Bulgarian split squat.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Bulgarian split squat.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Bulgarian split squat_thumb.jpg'
  },
  {
    id: 239,
    athlete: 'Khadi Sagnia',
    title: 'Burpees',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Burpees.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Burpees.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Burpees_thumb.jpg'
  },
  {
    id: 240,
    athlete: 'Khadi Sagnia',
    title: 'Calf raises Eccentric focus',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Calf raises Eccentric focus.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Calf raises Eccentric focus.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Calf raises Eccentric focus_thumb.jpg'
  },
  {
    id: 241,
    athlete: 'Khadi Sagnia',
    title: 'Consecutive Hang Cleans',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Consecutive Hang Cleans.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Consecutive Hang Cleans.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Consecutive Hang Cleans_thumb.jpg'
  },
  {
    id: 242,
    athlete: 'Khadi Sagnia',
    title: 'Dead Bug Exercise',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Dead Bug Exercise.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Dead Bug Exercise.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Dead Bug Exercise_thumb.jpg'
  },
  {
    id: 243,
    athlete: 'Khadi Sagnia',
    title: 'Decline push ups',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Decline push ups.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Decline push ups.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Decline push ups_thumb.jpg'
  },
  {
    id: 244,
    athlete: 'Khadi Sagnia',
    title: 'Elevated feet split squat',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Elevated feet split squat.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Elevated feet split squat.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Elevated feet split squat_thumb.jpg'
  },
  {
    id: 245,
    athlete: 'Khadi Sagnia',
    title: 'Elevated split squat',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Elevated split squat.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Elevated split squat.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Elevated split squat_thumb.jpg'
  },
  {
    id: 246,
    athlete: 'Khadi Sagnia',
    title: 'Exercise for back',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Exercise for back.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Exercise for back.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Exercise for back_thumb.jpg'
  },
  {
    id: 247,
    athlete: 'Khadi Sagnia',
    title: 'Fire hydrants and donkey kicks and ',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Fire hydrants and donkey kicks and .mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Fire hydrants and donkey kicks and .mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Fire hydrants and donkey kicks and _thumb.jpg'
  },
  {
    id: 248,
    athlete: 'Khadi Sagnia',
    title: 'Fire Hydrants',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Fire Hydrants.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Fire Hydrants.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Fire Hydrants_thumb.jpg'
  },
  {
    id: 249,
    athlete: 'Khadi Sagnia',
    title: 'Forward hill hops',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Forward hill hops.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Forward hill hops.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Forward hill hops_thumb.jpg'
  },
  {
    id: 250,
    athlete: 'Khadi Sagnia',
    title: 'Forward stairs jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Forward stairs jumps.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Forward stairs jumps.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Forward stairs jumps_thumb.jpg'
  },
  {
    id: 251,
    athlete: 'Khadi Sagnia',
    title: 'Glute exercise',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Glute exercise.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Glute exercise.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Glute exercise_thumb.jpg'
  },
  {
    id: 252,
    athlete: 'Khadi Sagnia',
    title: 'Good  Morning ',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Good  Morning .mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Good  Morning .mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Good  Morning _thumb.jpg'
  },
  {
    id: 253,
    athlete: 'Khadi Sagnia',
    title: 'Good morning',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Good morning.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Good morning.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Good morning_thumb.jpg'
  },
  {
    id: 254,
    athlete: 'Khadi Sagnia',
    title: 'Good Mornings',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Good Mornings.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Good Mornings.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Good Mornings_thumb.jpg'
  },
  {
    id: 255,
    athlete: 'Khadi Sagnia',
    title: 'Hang clean ',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Hang clean .mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Hang clean .mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Hang clean _thumb.jpg'
  },
  {
    id: 256,
    athlete: 'Khadi Sagnia',
    title: 'Hang Cleaning',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Hang Cleaning.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Hang Cleaning.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Hang Cleaning_thumb.jpg'
  },
  {
    id: 257,
    athlete: 'Khadi Sagnia',
    title: 'Hang Cleans',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Hang Cleans.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Hang Cleans.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Hang Cleans_thumb.jpg'
  },
  {
    id: 258,
    athlete: 'Khadi Sagnia',
    title: 'Hanging crunches',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Hanging crunches.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Hanging crunches.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Hanging crunches_thumb.jpg'
  },
  {
    id: 259,
    athlete: 'Khadi Sagnia',
    title: 'Hops over line',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Hops over line.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Hops over line.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Hops over line_thumb.jpg'
  },
  {
    id: 260,
    athlete: 'Khadi Sagnia',
    title: 'Knee Side plank leg raises',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Knee Side plank leg raises.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Knee Side plank leg raises.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Knee Side plank leg raises_thumb.jpg'
  },
  {
    id: 261,
    athlete: 'Khadi Sagnia',
    title: 'Kopenhangen plank with knee drive to side',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Kopenhangen plank with knee drive to side.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Kopenhangen plank with knee drive to side.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Kopenhangen plank with knee drive to side_thumb.jpg'
  },
  {
    id: 262,
    athlete: 'Khadi Sagnia',
    title: 'Long jump',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Long jump.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Long jump.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Long jump_thumb.jpg'
  },
  {
    id: 263,
    athlete: 'Khadi Sagnia',
    title: 'Long jumping',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Long jumping.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Long jumping.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Long jumping_thumb.jpg'
  },
  {
    id: 264,
    athlete: 'Khadi Sagnia',
    title: 'Max broad jump',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Max broad jump.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Max broad jump.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Max broad jump_thumb.jpg'
  },
  {
    id: 265,
    athlete: 'Khadi Sagnia',
    title: 'Max effort broad jump',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Max effort broad jump.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Max effort broad jump.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Max effort broad jump_thumb.jpg'
  },
  {
    id: 266,
    athlete: 'Khadi Sagnia',
    title: 'Max Hang Clean',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Max Hang Clean.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Max Hang Clean.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Max Hang Clean_thumb.jpg'
  },
  {
    id: 267,
    athlete: 'Khadi Sagnia',
    title: 'Mountain climbers',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Mountain climbers.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Mountain climbers.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Mountain climbers_thumb.jpg'
  },
  {
    id: 268,
    athlete: 'Khadi Sagnia',
    title: 'Nordic hamstring curl semi assisted',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Nordic hamstring curl semi assisted.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Nordic hamstring curl semi assisted.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Nordic hamstring curl semi assisted_thumb.jpg'
  },
  {
    id: 269,
    athlete: 'Khadi Sagnia',
    title: 'Nordic Hamstring curls assisted with yoga ball',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Nordic Hamstring curls assisted with yoga ball.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Nordic Hamstring curls assisted with yoga ball.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Nordic Hamstring curls assisted with yoga ball_thumb.jpg'
  },
  {
    id: 270,
    athlete: 'Khadi Sagnia',
    title: 'Overhead squat',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Overhead squat.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Overhead squat.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Overhead squat_thumb.jpg'
  },
  {
    id: 271,
    athlete: 'Khadi Sagnia',
    title: 'Overturning Back to V Up Medicine Ball exercise',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Overturning Back to V Up Medicine Ball exercise.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Overturning Back to V Up Medicine Ball exercise.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Overturning Back to V Up Medicine Ball exercise_thumb.jpg'
  },
  {
    id: 272,
    athlete: 'Khadi Sagnia',
    title: 'Pike push ups',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Pike push ups.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Pike push ups.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Pike push ups_thumb.jpg'
  },
  {
    id: 273,
    athlete: 'Khadi Sagnia',
    title: 'Plank jacks over bench',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Plank jacks over bench.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Plank jacks over bench.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Plank jacks over bench_thumb.jpg'
  },
  {
    id: 274,
    athlete: 'Khadi Sagnia',
    title: 'Plank jacks',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Plank jacks.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Plank jacks.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Plank jacks_thumb.jpg'
  },
  {
    id: 275,
    athlete: 'Khadi Sagnia',
    title: 'Plank to push up',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Plank to push up.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Plank to push up.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Plank to push up_thumb.jpg'
  },
  {
    id: 276,
    athlete: 'Khadi Sagnia',
    title: 'Plank with knee drive to the side',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Plank with knee drive to the side.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Plank with knee drive to the side.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Plank with knee drive to the side_thumb.jpg'
  },
  {
    id: 277,
    athlete: 'Khadi Sagnia',
    title: 'Pull up bar leg raises.mp4',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Pull up bar leg raises.mp4.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Pull up bar leg raises.mp4.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Pull up bar leg raises.mp4_thumb.jpg'
  },
  {
    id: 278,
    athlete: 'Khadi Sagnia',
    title: 'Pull ups',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Pull ups.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Pull ups.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Pull ups_thumb.jpg'
  },
  {
    id: 279,
    athlete: 'Khadi Sagnia',
    title: 'Pull ups.mp4',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Pull ups.mp4.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Pull ups.mp4.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Pull ups.mp4_thumb.jpg'
  },
  {
    id: 280,
    athlete: 'Khadi Sagnia',
    title: 'Push ups with hands forward',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Push ups with hands forward.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Push ups with hands forward.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Push ups with hands forward_thumb.jpg'
  },
  {
    id: 281,
    athlete: 'Khadi Sagnia',
    title: 'Push ups',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Push ups.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Push ups.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Push ups_thumb.jpg'
  },
  {
    id: 282,
    athlete: 'Khadi Sagnia',
    title: 'Quarter squats',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Quarter squats.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Quarter squats.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Quarter squats_thumb.jpg'
  },
  {
    id: 283,
    athlete: 'Khadi Sagnia',
    title: 'Quick Battle Rope up and down',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Quick Battle Rope up and down.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Quick Battle Rope up and down.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Quick Battle Rope up and down_thumb.jpg'
  },
  {
    id: 284,
    athlete: 'Khadi Sagnia',
    title: 'Quick feet over line',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Quick feet over line.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Quick feet over line.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Quick feet over line_thumb.jpg'
  },
  {
    id: 285,
    athlete: 'Khadi Sagnia',
    title: 'Quick Feets',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Quick Feets.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Quick Feets.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Quick Feets_thumb.jpg'
  },
  {
    id: 286,
    athlete: 'Khadi Sagnia',
    title: 'Quick hamstring band pulls',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Quick hamstring band pulls.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Quick hamstring band pulls.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Quick hamstring band pulls_thumb.jpg'
  },
  {
    id: 287,
    athlete: 'Khadi Sagnia',
    title: 'Repetetive hang cleans',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Repetetive hang cleans.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Repetetive hang cleans.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Repetetive hang cleans_thumb.jpg'
  },
  {
    id: 288,
    athlete: 'Khadi Sagnia',
    title: 'Ressisted sprinting',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Ressisted sprinting.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Ressisted sprinting.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Ressisted sprinting_thumb.jpg'
  },
  {
    id: 289,
    athlete: 'Khadi Sagnia',
    title: 'Reverse Crunches',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Reverse Crunches.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Reverse Crunches.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Reverse Crunches_thumb.jpg'
  },
  {
    id: 290,
    athlete: 'Khadi Sagnia',
    title: 'Running to bex step up with knee drive',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Running to bex step up with knee drive.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Running to bex step up with knee drive.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Running to bex step up with knee drive_thumb.jpg'
  },
  {
    id: 291,
    athlete: 'Khadi Sagnia',
    title: 'Scissor Lunge Jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Scissor Lunge Jumps.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Scissor Lunge Jumps.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Scissor Lunge Jumps_thumb.jpg'
  },
  {
    id: 292,
    athlete: 'Khadi Sagnia',
    title: 'Shoulder cirsles with plate',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Shoulder cirsles with plate.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Shoulder cirsles with plate.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Shoulder cirsles with plate_thumb.jpg'
  },
  {
    id: 293,
    athlete: 'Khadi Sagnia',
    title: 'Side crunches',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Side crunches.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Side crunches.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Side crunches_thumb.jpg'
  },
  {
    id: 294,
    athlete: 'Khadi Sagnia',
    title: 'Side hops',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Side hops.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Side hops.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Side hops_thumb.jpg'
  },
  {
    id: 295,
    athlete: 'Khadi Sagnia',
    title: 'Side plank leg lifts',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Side plank leg lifts.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Side plank leg lifts.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Side plank leg lifts_thumb.jpg'
  },
  {
    id: 296,
    athlete: 'Khadi Sagnia',
    title: 'Single leg belt squat',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg belt squat.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg belt squat.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg belt squat_thumb.jpg'
  },
  {
    id: 297,
    athlete: 'Khadi Sagnia',
    title: 'Single leg glute bridge',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg glute bridge.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg glute bridge.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg glute bridge_thumb.jpg'
  },
  {
    id: 298,
    athlete: 'Khadi Sagnia',
    title: 'Single leg hops to side',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg hops to side.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg hops to side.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg hops to side_thumb.jpg'
  },
  {
    id: 299,
    athlete: 'Khadi Sagnia',
    title: 'Single leg Plate Quarter V Up',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg Plate Quarter V Up.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg Plate Quarter V Up.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg Plate Quarter V Up_thumb.jpg'
  },
  {
    id: 300,
    athlete: 'Khadi Sagnia',
    title: 'Single leg V Ups',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg V Ups.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg V Ups.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Single leg V Ups_thumb.jpg'
  },
  {
    id: 301,
    athlete: 'Khadi Sagnia',
    title: 'Skaters',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Skaters.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Skaters.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Skaters_thumb.jpg'
  },
  {
    id: 302,
    athlete: 'Khadi Sagnia',
    title: 'Split squat elevated feet',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Split squat elevated feet.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Split squat elevated feet.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Split squat elevated feet_thumb.jpg'
  },
  {
    id: 303,
    athlete: 'Khadi Sagnia',
    title: 'Squat Jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Squat Jumps.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Squat Jumps.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Squat Jumps_thumb.jpg'
  },
  {
    id: 304,
    athlete: 'Khadi Sagnia',
    title: 'Squats',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Squats.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Squats.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Squats_thumb.jpg'
  },
  {
    id: 305,
    athlete: 'Khadi Sagnia',
    title: 'Stairs jumps',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Stairs jumps.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Stairs jumps.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Stairs jumps_thumb.jpg'
  },
  {
    id: 306,
    athlete: 'Khadi Sagnia',
    title: 'Step up with knee drive',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Step up with knee drive.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Step up with knee drive.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Step up with knee drive_thumb.jpg'
  },
  {
    id: 307,
    athlete: 'Khadi Sagnia',
    title: 'Step up',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Step up.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Step up.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Step up_thumb.jpg'
  },
  {
    id: 308,
    athlete: 'Khadi Sagnia',
    title: 'Step ups with knee drive',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Step ups with knee drive.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Step ups with knee drive.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Step ups with knee drive_thumb.jpg'
  },
  {
    id: 309,
    athlete: 'Khadi Sagnia',
    title: 'Supinated push ups',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Supinated push ups.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Supinated push ups.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Supinated push ups_thumb.jpg'
  },
  {
    id: 310,
    athlete: 'Khadi Sagnia',
    title: 'Triple jump from 2 feet',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Triple jump from 2 feet.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Triple jump from 2 feet.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Triple jump from 2 feet_thumb.jpg'
  },
  {
    id: 311,
    athlete: 'Khadi Sagnia',
    title: 'V ups',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_V ups.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_V ups.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_V ups_thumb.jpg'
  },
  {
    id: 312,
    athlete: 'Khadi Sagnia',
    title: 'Verical jump',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Verical jump.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Verical jump.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Verical jump_thumb.jpg'
  },
  {
    id: 313,
    athlete: 'Khadi Sagnia',
    title: 'Vertical jump',
    athletesSports: 'Long Jump',
    videoURL: '/videos/exercises/Khadi Sagnia_Long Jump_Vertical jump.mp4',
    videoURL_360p: '/videos/exercises/Khadi Sagnia_Long Jump_Vertical jump.mp4',
    poster: '/videos/exercises/Khadi Sagnia_Long Jump_Vertical jump_thumb.jpg'
  },
  {
    id: 314,
    athlete: 'Khamzat Chimaev',
    title: ' Band pulls with side step',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_ Band pulls with side step.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_ Band pulls with side step.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_ Band pulls with side step_thumb.jpg'
  },
  {
    id: 315,
    athlete: 'Khamzat Chimaev',
    title: ' Rpetitive Dumbell Snatches',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_ Rpetitive Dumbell Snatches.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_ Rpetitive Dumbell Snatches.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_ Rpetitive Dumbell Snatches_thumb.jpg'
  },
  {
    id: 316,
    athlete: 'Khamzat Chimaev',
    title: 'Alternating Dumbell Pressess',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Alternating Dumbell Pressess.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Alternating Dumbell Pressess.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Alternating Dumbell Pressess_thumb.jpg'
  },
  {
    id: 317,
    athlete: 'Khamzat Chimaev',
    title: 'Arm Bicycle Cardio',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Arm Bicycle Cardio.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Arm Bicycle Cardio.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Arm Bicycle Cardio_thumb.jpg'
  },
  {
    id: 318,
    athlete: 'Khamzat Chimaev',
    title: 'Band Push',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Band Push.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Band Push.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Band Push_thumb.jpg'
  },
  {
    id: 319,
    athlete: 'Khamzat Chimaev',
    title: 'Bench Press 1',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Bench Press 1.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Bench Press 1.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Bench Press 1_thumb.jpg'
  },
  {
    id: 320,
    athlete: 'Khamzat Chimaev',
    title: 'Bench Press 2',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Bench Press 2.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Bench Press 2.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Bench Press 2_thumb.jpg'
  },
  {
    id: 321,
    athlete: 'Khamzat Chimaev',
    title: 'Chain Pulls',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Chain Pulls.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Chain Pulls.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Chain Pulls_thumb.jpg'
  },
  {
    id: 322,
    athlete: 'Khamzat Chimaev',
    title: 'Deadlift with Explosive Row',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Deadlift with Explosive Row.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Deadlift with Explosive Row.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Deadlift with Explosive Row_thumb.jpg'
  },
  {
    id: 323,
    athlete: 'Khamzat Chimaev',
    title: 'Deadlift',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Deadlift.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Deadlift.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Deadlift_thumb.jpg'
  },
  {
    id: 324,
    athlete: 'Khamzat Chimaev',
    title: 'Explosive Barbell Pushofs',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Explosive Barbell Pushofs.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Explosive Barbell Pushofs.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Explosive Barbell Pushofs_thumb.jpg'
  },
  {
    id: 325,
    athlete: 'Khamzat Chimaev',
    title: 'Hang Clean to Shoulder PRess',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Hang Clean to Shoulder PRess.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Hang Clean to Shoulder PRess.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Hang Clean to Shoulder PRess_thumb.jpg'
  },
  {
    id: 326,
    athlete: 'Khamzat Chimaev',
    title: 'Hurdle Jumps',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Hurdle Jumps.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Hurdle Jumps.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Hurdle Jumps_thumb.jpg'
  },
  {
    id: 327,
    athlete: 'Khamzat Chimaev',
    title: 'Landmine Rotation with explosive push',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Landmine Rotation with explosive push.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Landmine Rotation with explosive push.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Landmine Rotation with explosive push_thumb.jpg'
  },
  {
    id: 328,
    athlete: 'Khamzat Chimaev',
    title: 'Medicine Ball Slams 1',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams 1.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams 1.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams 1_thumb.jpg'
  },
  {
    id: 329,
    athlete: 'Khamzat Chimaev',
    title: 'Medicine Ball Slams 2',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams 2.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams 2.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams 2_thumb.jpg'
  },
  {
    id: 330,
    athlete: 'Khamzat Chimaev',
    title: 'Medicine Ball Slams And Shadow Boxing',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams And Shadow Boxing.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams And Shadow Boxing.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Medicine Ball Slams And Shadow Boxing_thumb.jpg'
  },
  {
    id: 331,
    athlete: 'Khamzat Chimaev',
    title: 'Rope Pulls',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Rope Pulls.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Rope Pulls.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Rope Pulls_thumb.jpg'
  },
  {
    id: 332,
    athlete: 'Khamzat Chimaev',
    title: 'Weighted Ring Pullups',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Weighted Ring Pullups.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Weighted Ring Pullups.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Weighted Ring Pullups_thumb.jpg'
  },
  {
    id: 333,
    athlete: 'Khamzat Chimaev',
    title: 'Wrestling Exercise',
    athletesSports: 'MMA',
    videoURL: '/videos/exercises/Khamzat Chimaev_MMA_Wrestling Exercise.mp4',
    videoURL_360p: '/videos/exercises/Khamzat Chimaev_MMA_Wrestling Exercise.mp4',
    poster: '/videos/exercises/Khamzat Chimaev_MMA_Wrestling Exercise_thumb.jpg'
  },
  {
    id: 334,
    athlete: 'Laviai & Lina Nielsen',
    title: ' Running simulation with plates',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_ Running simulation with plates.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_ Running simulation with plates.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_ Running simulation with plates_thumb.jpg'
  },
  {
    id: 335,
    athlete: 'Laviai & Lina Nielsen',
    title: ' Skater floor touches',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_ Skater floor touches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_ Skater floor touches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_ Skater floor touches_thumb.jpg'
  },
  {
    id: 336,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Back raises',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Back raises.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Back raises.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Back raises_thumb.jpg'
  },
  {
    id: 337,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Bench Press 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Bench Press 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Bench Press 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Bench Press 1_thumb.jpg'
  },
  {
    id: 338,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Bench Press',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Bench Press.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Bench Press.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Bench Press_thumb.jpg'
  },
  {
    id: 339,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Box squats 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 1_thumb.jpg'
  },
  {
    id: 340,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Box squats 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 2_thumb.jpg'
  },
  {
    id: 341,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Box squats 3',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 3.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 3.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 3_thumb.jpg'
  },
  {
    id: 342,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Box squats 4',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 4.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 4.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Box squats 4_thumb.jpg'
  },
  {
    id: 343,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Box Step Up with Knee Drive',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Box Step Up with Knee Drive.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Box Step Up with Knee Drive.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Box Step Up with Knee Drive_thumb.jpg'
  },
  {
    id: 344,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Broad Jump 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Broad Jump 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Broad Jump 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Broad Jump 1_thumb.jpg'
  },
  {
    id: 345,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Broad Jump',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Broad Jump.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Broad Jump.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Broad Jump_thumb.jpg'
  },
  {
    id: 346,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Crunch feet touches',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Crunch feet touches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Crunch feet touches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Crunch feet touches_thumb.jpg'
  },
  {
    id: 347,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Deadlifts',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Deadlifts.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Deadlifts.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Deadlifts_thumb.jpg'
  },
  {
    id: 348,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Drop jumps 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Drop jumps 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Drop jumps 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Drop jumps 1_thumb.jpg'
  },
  {
    id: 349,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Drop jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Drop jumps.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Drop jumps.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Drop jumps_thumb.jpg'
  },
  {
    id: 350,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Explosive scissor barbell pushing',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Explosive scissor barbell pushing.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Explosive scissor barbell pushing.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Explosive scissor barbell pushing_thumb.jpg'
  },
  {
    id: 351,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Glute bridges',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Glute bridges.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Glute bridges.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Glute bridges_thumb.jpg'
  },
  {
    id: 352,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Half squats and reactive jumps 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Half squats and reactive jumps 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Half squats and reactive jumps 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Half squats and reactive jumps 1_thumb.jpg'
  },
  {
    id: 353,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Half squats and reactive jumps 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Half squats and reactive jumps 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Half squats and reactive jumps 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Half squats and reactive jumps 2_thumb.jpg'
  },
  {
    id: 354,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Hang Clean',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang Clean.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang Clean.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang Clean_thumb.jpg'
  },
  {
    id: 355,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Hang cleans 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang cleans 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang cleans 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang cleans 1_thumb.jpg'
  },
  {
    id: 356,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Hang Cleans',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang Cleans.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang Cleans.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Hang Cleans_thumb.jpg'
  },
  {
    id: 357,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Hurdle Jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Hurdle Jumps.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Hurdle Jumps.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Hurdle Jumps_thumb.jpg'
  },
  {
    id: 358,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Kickback Single Leg RDL',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Kickback Single Leg RDL.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Kickback Single Leg RDL.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Kickback Single Leg RDL_thumb.jpg'
  },
  {
    id: 359,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Landmine rotations',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Landmine rotations.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Landmine rotations.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Landmine rotations_thumb.jpg'
  },
  {
    id: 360,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Lateral Squat',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Lateral Squat.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Lateral Squat.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Lateral Squat_thumb.jpg'
  },
  {
    id: 361,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball Crunches 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Crunches 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Crunches 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Crunches 1_thumb.jpg'
  },
  {
    id: 362,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball Crunches',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Crunches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Crunches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Crunches_thumb.jpg'
  },
  {
    id: 363,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball Sit Up + Overhead Reach',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Sit Up + Overhead Reach.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Sit Up + Overhead Reach.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Sit Up + Overhead Reach_thumb.jpg'
  },
  {
    id: 364,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball Throw Backwards 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw Backwards 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw Backwards 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw Backwards 1_thumb.jpg'
  },
  {
    id: 365,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball Throw Backwards',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw Backwards.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw Backwards.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw Backwards_thumb.jpg'
  },
  {
    id: 366,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball Throw',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Throw_thumb.jpg'
  },
  {
    id: 367,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball Toe Touches',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Toe Touches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Toe Touches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball Toe Touches_thumb.jpg'
  },
  {
    id: 368,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Medicine Ball V Ups',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball V Ups.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball V Ups.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Medicine Ball V Ups_thumb.jpg'
  },
  {
    id: 369,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Mountain Climbers',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Mountain Climbers.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Mountain Climbers.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Mountain Climbers_thumb.jpg'
  },
  {
    id: 370,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Nordic Hamstring Curls',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Nordic Hamstring Curls.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Nordic Hamstring Curls.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Nordic Hamstring Curls_thumb.jpg'
  },
  {
    id: 371,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Paused reactive RDL 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Paused reactive RDL 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Paused reactive RDL 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Paused reactive RDL 1_thumb.jpg'
  },
  {
    id: 372,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Paused reactive RDL 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Paused reactive RDL 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Paused reactive RDL 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Paused reactive RDL 2_thumb.jpg'
  },
  {
    id: 373,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Plank Jack Box Jump',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Plank Jack Box Jump.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Plank Jack Box Jump.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Plank Jack Box Jump_thumb.jpg'
  },
  {
    id: 374,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Plank oblique twists',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Plank oblique twists.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Plank oblique twists.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Plank oblique twists_thumb.jpg'
  },
  {
    id: 375,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Power Clean 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Power Clean 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Power Clean 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Power Clean 1_thumb.jpg'
  },
  {
    id: 376,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Power Clean',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Power Clean.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Power Clean.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Power Clean_thumb.jpg'
  },
  {
    id: 377,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Power cleans 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Power cleans 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Power cleans 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Power cleans 1_thumb.jpg'
  },
  {
    id: 378,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Power cleans 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Power cleans 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Power cleans 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Power cleans 2_thumb.jpg'
  },
  {
    id: 379,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Pull ups',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Pull ups.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Pull ups.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Pull ups_thumb.jpg'
  },
  {
    id: 380,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Push ups',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Push ups.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Push ups.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Push ups_thumb.jpg'
  },
  {
    id: 381,
    athlete: 'Laviai & Lina Nielsen',
    title: 'RDL 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 1_thumb.jpg'
  },
  {
    id: 382,
    athlete: 'Laviai & Lina Nielsen',
    title: 'RDL 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 2_thumb.jpg'
  },
  {
    id: 383,
    athlete: 'Laviai & Lina Nielsen',
    title: 'RDL 3',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 3.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 3.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 3_thumb.jpg'
  },
  {
    id: 384,
    athlete: 'Laviai & Lina Nielsen',
    title: 'RDL 4',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 4.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 4.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_RDL 4_thumb.jpg'
  },
  {
    id: 385,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Resistance Sprinting 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 1_thumb.jpg'
  },
  {
    id: 386,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Resistance Sprinting 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 2_thumb.jpg'
  },
  {
    id: 387,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Resistance Sprinting 3',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 3.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 3.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 3_thumb.jpg'
  },
  {
    id: 388,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Resistance Sprinting 4',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 4.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 4.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting 4_thumb.jpg'
  },
  {
    id: 389,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Resistance Sprinting',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Resistance Sprinting_thumb.jpg'
  },
  {
    id: 390,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Resisted sprint',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Resisted sprint.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Resisted sprint.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Resisted sprint_thumb.jpg'
  },
  {
    id: 391,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Russian Twist + Overhead Reach',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twist + Overhead Reach.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twist + Overhead Reach.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twist + Overhead Reach_thumb.jpg'
  },
  {
    id: 392,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Russian Twist Medicine Ball Throw',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twist Medicine Ball Throw.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twist Medicine Ball Throw.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twist Medicine Ball Throw_thumb.jpg'
  },
  {
    id: 393,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Russian Twists',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twists.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twists.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Russian Twists_thumb.jpg'
  },
  {
    id: 394,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Side crunches',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Side crunches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Side crunches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Side crunches_thumb.jpg'
  },
  {
    id: 395,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Side Plank Raises',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Side Plank Raises.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Side Plank Raises.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Side Plank Raises_thumb.jpg'
  },
  {
    id: 396,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Single arm dumbell snatch 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch 1_thumb.jpg'
  },
  {
    id: 397,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Single arm dumbell snatch 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch 2_thumb.jpg'
  },
  {
    id: 398,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Single arm dumbell snatch',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Single arm dumbell snatch_thumb.jpg'
  },
  {
    id: 399,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Single Leg Sliders',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Single Leg Sliders.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Single Leg Sliders.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Single Leg Sliders_thumb.jpg'
  },
  {
    id: 400,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Sled sprints',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Sled sprints.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Sled sprints.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Sled sprints_thumb.jpg'
  },
  {
    id: 401,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Squat jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Squat jumps.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Squat jumps.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Squat jumps_thumb.jpg'
  },
  {
    id: 402,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Squat',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Squat.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Squat.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Squat_thumb.jpg'
  },
  {
    id: 403,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Trap Bar Deadlift 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Trap Bar Deadlift 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Trap Bar Deadlift 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Trap Bar Deadlift 1_thumb.jpg'
  },
  {
    id: 404,
    athlete: 'Laviai & Lina Nielsen',
    title: 'Trap Bar Deadlift',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_Trap Bar Deadlift.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_Trap Bar Deadlift.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_Trap Bar Deadlift_thumb.jpg'
  },
  {
    id: 405,
    athlete: 'Laviai & Lina Nielsen',
    title: 'V Ups',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_400m_V Ups.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_400m_V Ups.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_400m_V Ups_thumb.jpg'
  },
  {
    id: 406,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Bench Press 1',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Bench Press 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Bench Press 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Bench Press 1_thumb.jpg'
  },
  {
    id: 407,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Bench Press',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Bench Press.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Bench Press.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Bench Press_thumb.jpg'
  },
  {
    id: 408,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Deadlift',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Deadlift.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Deadlift.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Deadlift_thumb.jpg'
  },
  {
    id: 409,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Frog crunches',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Frog crunches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Frog crunches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Frog crunches_thumb.jpg'
  },
  {
    id: 410,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Hang Clean 2',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Hang Clean 2.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Hang Clean 2.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Hang Clean 2_thumb.jpg'
  },
  {
    id: 411,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'High Knees Skip',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_High Knees Skip.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_High Knees Skip.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_High Knees Skip_thumb.jpg'
  },
  {
    id: 412,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Hurdle Jumps',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Hurdle Jumps.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Hurdle Jumps.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Hurdle Jumps_thumb.jpg'
  },
  {
    id: 413,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Pause Hang Clean',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Pause Hang Clean.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Pause Hang Clean.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Pause Hang Clean_thumb.jpg'
  },
  {
    id: 414,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Plank Oblique Twists',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Plank Oblique Twists.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Plank Oblique Twists.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Plank Oblique Twists_thumb.jpg'
  },
  {
    id: 415,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Power Clean',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Power Clean.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Power Clean.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Power Clean_thumb.jpg'
  },
  {
    id: 416,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Power Cleans',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Power Cleans.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Power Cleans.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Power Cleans_thumb.jpg'
  },
  {
    id: 417,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Quad extension on machine',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Quad extension on machine.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Quad extension on machine.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Quad extension on machine_thumb.jpg'
  },
  {
    id: 418,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Quarter Squat + Reactive Jump',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat + Reactive Jump.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat + Reactive Jump.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat + Reactive Jump_thumb.jpg'
  },
  {
    id: 419,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Quarter Squat 1',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat 1_thumb.jpg'
  },
  {
    id: 420,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Quarter Squat',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Quarter Squat_thumb.jpg'
  },
  {
    id: 421,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Reactive hang Clean on Clap 1',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Reactive hang Clean on Clap 1.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Reactive hang Clean on Clap 1.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Reactive hang Clean on Clap 1_thumb.jpg'
  },
  {
    id: 422,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Reactive hang Clean on Clap',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Reactive hang Clean on Clap.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Reactive hang Clean on Clap.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Reactive hang Clean on Clap_thumb.jpg'
  },
  {
    id: 423,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Reverse crunches',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Reverse crunches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Reverse crunches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Reverse crunches_thumb.jpg'
  },
  {
    id: 424,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Russian Twists',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Russian Twists.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Russian Twists.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Russian Twists_thumb.jpg'
  },
  {
    id: 425,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Single Arm Dumbell Snatch',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Single Arm Dumbell Snatch.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Single Arm Dumbell Snatch.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Single Arm Dumbell Snatch_thumb.jpg'
  },
  {
    id: 426,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Toe Touch Crunches',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Toe Touch Crunches.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Toe Touch Crunches.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Toe Touch Crunches_thumb.jpg'
  },
  {
    id: 427,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'Trap Bar Deadlift',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_Trap Bar Deadlift.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_Trap Bar Deadlift.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_Trap Bar Deadlift_thumb.jpg'
  },
  {
    id: 428,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'V Ups Easy',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_V Ups Easy.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_V Ups Easy.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_V Ups Easy_thumb.jpg'
  },
  {
    id: 429,
    athlete: 'Laviai & Lina Nielsen',
    title: '',
    athletesSports: 'V Ups',
    videoURL: '/videos/exercises/Laviai & Lina Nielsen_V Ups.mp4',
    videoURL_360p: '/videos/exercises/Laviai & Lina Nielsen_V Ups.mp4',
    poster: '/videos/exercises/Laviai & Lina Nielsen_V Ups_thumb.jpg'
  },
  {
    id: 430,
    athlete: 'Lebron James',
    title: ' Dumbell Front Raise with back step',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_ Dumbell Front Raise with back step.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_ Dumbell Front Raise with back step.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_ Dumbell Front Raise with back step_thumb.jpg'
  },
  {
    id: 431,
    athlete: 'Lebron James',
    title: 'Ankle Stability Drill',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Ankle Stability Drill.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Ankle Stability Drill.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Ankle Stability Drill_thumb.jpg'
  },
  {
    id: 432,
    athlete: 'Lebron James',
    title: 'Back Raises with Extension',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Back Raises with Extension.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Back Raises with Extension.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Back Raises with Extension_thumb.jpg'
  },
  {
    id: 433,
    athlete: 'Lebron James',
    title: 'Banded Side Lunge 1',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Banded Side Lunge 1.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Banded Side Lunge 1.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Banded Side Lunge 1_thumb.jpg'
  },
  {
    id: 434,
    athlete: 'Lebron James',
    title: 'Banded Side Lunge 2',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Banded Side Lunge 2.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Banded Side Lunge 2.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Banded Side Lunge 2_thumb.jpg'
  },
  {
    id: 435,
    athlete: 'Lebron James',
    title: 'Banded X Walk',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Banded X Walk.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Banded X Walk.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Banded X Walk_thumb.jpg'
  },
  {
    id: 436,
    athlete: 'Lebron James',
    title: 'Bar knee raises 1',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Bar knee raises 1.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Bar knee raises 1.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Bar knee raises 1_thumb.jpg'
  },
  {
    id: 437,
    athlete: 'Lebron James',
    title: 'Bar knee raises 2',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Bar knee raises 2.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Bar knee raises 2.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Bar knee raises 2_thumb.jpg'
  },
  {
    id: 438,
    athlete: 'Lebron James',
    title: 'Barbell Biceps Curls',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Barbell Biceps Curls.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Barbell Biceps Curls.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Barbell Biceps Curls_thumb.jpg'
  },
  {
    id: 439,
    athlete: 'Lebron James',
    title: 'Bulgarian Split Squat ISO with Kettlebell Shoulder Circles ',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Bulgarian Split Squat ISO with Kettlebell Shoulder Circles .mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Bulgarian Split Squat ISO with Kettlebell Shoulder Circles .mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Bulgarian Split Squat ISO with Kettlebell Shoulder Circles _thumb.jpg'
  },
  {
    id: 440,
    athlete: 'Lebron James',
    title: 'Bulgarian Split Squat',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Bulgarian Split Squat.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Bulgarian Split Squat.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Bulgarian Split Squat_thumb.jpg'
  },
  {
    id: 441,
    athlete: 'Lebron James',
    title: 'Cable pull with side lunge',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Cable pull with side lunge.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Cable pull with side lunge.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Cable pull with side lunge_thumb.jpg'
  },
  {
    id: 442,
    athlete: 'Lebron James',
    title: 'Cardio climbers',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Cardio climbers.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Cardio climbers.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Cardio climbers_thumb.jpg'
  },
  {
    id: 443,
    athlete: 'Lebron James',
    title: 'Cardio climbers',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Cardio climbers_compressed.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Cardio climbers_compressed.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Cardio climbers_compressed_thumb.jpg'
  },
  {
    id: 444,
    athlete: 'Lebron James',
    title: 'DB Renegade Dumbell Row',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_DB Renegade Dumbell Row.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_DB Renegade Dumbell Row.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_DB Renegade Dumbell Row_thumb.jpg'
  },
  {
    id: 445,
    athlete: 'Lebron James',
    title: 'Dead Bug Dumbell Press',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Dead Bug Dumbell Press.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Dead Bug Dumbell Press.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Dead Bug Dumbell Press_thumb.jpg'
  },
  {
    id: 446,
    athlete: 'Lebron James',
    title: 'Dumbell Push ups With Row',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Dumbell Push ups With Row.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Dumbell Push ups With Row.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Dumbell Push ups With Row_thumb.jpg'
  },
  {
    id: 447,
    athlete: 'Lebron James',
    title: 'Hip flexor leg raises',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Hip flexor leg raises.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Hip flexor leg raises.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Hip flexor leg raises_thumb.jpg'
  },
  {
    id: 448,
    athlete: 'Lebron James',
    title: 'Incline Dumbell Press',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Incline Dumbell Press.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Incline Dumbell Press.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Incline Dumbell Press_thumb.jpg'
  },
  {
    id: 449,
    athlete: 'Lebron James',
    title: 'Landmine shoulder press with rotation',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Landmine shoulder press with rotation.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Landmine shoulder press with rotation.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Landmine shoulder press with rotation_thumb.jpg'
  },
  {
    id: 450,
    athlete: 'Lebron James',
    title: 'Neutral Grip Pull Ups',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Neutral Grip Pull Ups.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Neutral Grip Pull Ups.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Neutral Grip Pull Ups_thumb.jpg'
  },
  {
    id: 451,
    athlete: 'Lebron James',
    title: 'Rotation Pull Drop Step',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Rotation Pull Drop Step.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Rotation Pull Drop Step.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Rotation Pull Drop Step_thumb.jpg'
  },
  {
    id: 452,
    athlete: 'Lebron James',
    title: 'Side Lunge with feet reach',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Side Lunge with feet reach.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Side Lunge with feet reach.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Side Lunge with feet reach_thumb.jpg'
  },
  {
    id: 453,
    athlete: 'Lebron James',
    title: 'Single leg lateral DB squat',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Single leg lateral DB squat.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Single leg lateral DB squat.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Single leg lateral DB squat_thumb.jpg'
  },
  {
    id: 454,
    athlete: 'Lebron James',
    title: 'Single Leg RDL 1',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Single Leg RDL 1.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Single Leg RDL 1.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Single Leg RDL 1_thumb.jpg'
  },
  {
    id: 455,
    athlete: 'Lebron James',
    title: 'Single Leg RDL 2',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Single Leg RDL 2.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Single Leg RDL 2.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Single Leg RDL 2_thumb.jpg'
  },
  {
    id: 456,
    athlete: 'Lebron James',
    title: 'Stability shoulder press',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Stability shoulder press.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Stability shoulder press.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Stability shoulder press_thumb.jpg'
  },
  {
    id: 457,
    athlete: 'Lebron James',
    title: 'Trampoline Jumps',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Trampoline Jumps.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Trampoline Jumps.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Trampoline Jumps_thumb.jpg'
  },
  {
    id: 458,
    athlete: 'Lebron James',
    title: 'WAFF Ankle',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_WAFF Ankle.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_WAFF Ankle.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_WAFF Ankle_thumb.jpg'
  },
  {
    id: 459,
    athlete: 'Lebron James',
    title: 'Wide Half Squat',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Wide Half Squat.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Wide Half Squat.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Wide Half Squat_thumb.jpg'
  },
  {
    id: 460,
    athlete: 'Lebron James',
    title: 'Wide Squat',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Wide Squat.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Wide Squat.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Wide Squat_thumb.jpg'
  },
  {
    id: 461,
    athlete: 'Lebron James',
    title: 'Yoga ball back raises 1',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Yoga ball back raises 1.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Yoga ball back raises 1.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Yoga ball back raises 1_thumb.jpg'
  },
  {
    id: 462,
    athlete: 'Lebron James',
    title: 'Yoga ball back raises 2',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Yoga ball back raises 2.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Yoga ball back raises 2.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Yoga ball back raises 2_thumb.jpg'
  },
  {
    id: 463,
    athlete: 'Lebron James',
    title: 'Yoga ball side lifts',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Lebron James_Basketball_Yoga ball side lifts.mp4',
    videoURL_360p: '/videos/exercises/Lebron James_Basketball_Yoga ball side lifts.mp4',
    poster: '/videos/exercises/Lebron James_Basketball_Yoga ball side lifts_thumb.jpg'
  },
  {
    id: 464,
    athlete: 'Lieke Klaver',
    title: 'Box Paused Squat ',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Lieke Klaver_400m_Box Paused Squat .mp4',
    videoURL_360p: '/videos/exercises/Lieke Klaver_400m_Box Paused Squat .mp4',
    poster: '/videos/exercises/Lieke Klaver_400m_Box Paused Squat _thumb.jpg'
  },
  {
    id: 465,
    athlete: 'Lieke Klaver',
    title: 'Hang Clean',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Lieke Klaver_400m_Hang Clean.mp4',
    videoURL_360p: '/videos/exercises/Lieke Klaver_400m_Hang Clean.mp4',
    poster: '/videos/exercises/Lieke Klaver_400m_Hang Clean_thumb.jpg'
  },
  {
    id: 466,
    athlete: 'Lieke Klaver',
    title: 'Hanging Leg raises',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Lieke Klaver_400m_Hanging Leg raises.mp4',
    videoURL_360p: '/videos/exercises/Lieke Klaver_400m_Hanging Leg raises.mp4',
    poster: '/videos/exercises/Lieke Klaver_400m_Hanging Leg raises_thumb.jpg'
  },
  {
    id: 467,
    athlete: 'Lieke Klaver',
    title: 'Hip Thrust',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Lieke Klaver_400m_Hip Thrust.mp4',
    videoURL_360p: '/videos/exercises/Lieke Klaver_400m_Hip Thrust.mp4',
    poster: '/videos/exercises/Lieke Klaver_400m_Hip Thrust_thumb.jpg'
  },
  {
    id: 468,
    athlete: 'Lieke Klaver',
    title: 'Repetitive Power Clean',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Lieke Klaver_400m_Repetitive Power Clean.mp4',
    videoURL_360p: '/videos/exercises/Lieke Klaver_400m_Repetitive Power Clean.mp4',
    poster: '/videos/exercises/Lieke Klaver_400m_Repetitive Power Clean_thumb.jpg'
  },
  {
    id: 469,
    athlete: 'Lieke Klaver',
    title: 'Trap  Bar Deadlift',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Lieke Klaver_400m_Trap  Bar Deadlift.mp4',
    videoURL_360p: '/videos/exercises/Lieke Klaver_400m_Trap  Bar Deadlift.mp4',
    poster: '/videos/exercises/Lieke Klaver_400m_Trap  Bar Deadlift_thumb.jpg'
  },
  {
    id: 470,
    athlete: 'Nielson',
    title: 'Box squats 3',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Box squats 3.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Box squats 3.mp4',
    poster: '/videos/exercises/Nielson_400m_Box squats 3_thumb.jpg'
  },
  {
    id: 471,
    athlete: 'Nielson',
    title: 'Box squats 4',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Box squats 4.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Box squats 4.mp4',
    poster: '/videos/exercises/Nielson_400m_Box squats 4_thumb.jpg'
  },
  {
    id: 472,
    athlete: 'Nielson',
    title: 'Deadlifts',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Deadlifts.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Deadlifts.mp4',
    poster: '/videos/exercises/Nielson_400m_Deadlifts_thumb.jpg'
  },
  {
    id: 473,
    athlete: 'Nielson',
    title: 'Drop jumps 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Drop jumps 1.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Drop jumps 1.mp4',
    poster: '/videos/exercises/Nielson_400m_Drop jumps 1_thumb.jpg'
  },
  {
    id: 474,
    athlete: 'Nielson',
    title: 'Drop jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Drop jumps.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Drop jumps.mp4',
    poster: '/videos/exercises/Nielson_400m_Drop jumps_thumb.jpg'
  },
  {
    id: 475,
    athlete: 'Nielson',
    title: 'Explosive scissor barbell pushing',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Explosive scissor barbell pushing.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Explosive scissor barbell pushing.mp4',
    poster: '/videos/exercises/Nielson_400m_Explosive scissor barbell pushing_thumb.jpg'
  },
  {
    id: 476,
    athlete: 'Nielson',
    title: 'Half squats and reactive jumps 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Half squats and reactive jumps 1.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Half squats and reactive jumps 1.mp4',
    poster: '/videos/exercises/Nielson_400m_Half squats and reactive jumps 1_thumb.jpg'
  },
  {
    id: 477,
    athlete: 'Nielson',
    title: 'Half squats and reactive jumps 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Half squats and reactive jumps 2.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Half squats and reactive jumps 2.mp4',
    poster: '/videos/exercises/Nielson_400m_Half squats and reactive jumps 2_thumb.jpg'
  },
  {
    id: 478,
    athlete: 'Nielson',
    title: 'Hang Cleans',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Hang Cleans.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Hang Cleans.mp4',
    poster: '/videos/exercises/Nielson_400m_Hang Cleans_thumb.jpg'
  },
  {
    id: 479,
    athlete: 'Nielson',
    title: 'Landmine rotations',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Landmine rotations.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Landmine rotations.mp4',
    poster: '/videos/exercises/Nielson_400m_Landmine rotations_thumb.jpg'
  },
  {
    id: 480,
    athlete: 'Nielson',
    title: 'Paused reactive RDL 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Paused reactive RDL 1.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Paused reactive RDL 1.mp4',
    poster: '/videos/exercises/Nielson_400m_Paused reactive RDL 1_thumb.jpg'
  },
  {
    id: 481,
    athlete: 'Nielson',
    title: 'Paused reactive RDL 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Paused reactive RDL 2.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Paused reactive RDL 2.mp4',
    poster: '/videos/exercises/Nielson_400m_Paused reactive RDL 2_thumb.jpg'
  },
  {
    id: 482,
    athlete: 'Nielson',
    title: 'Power cleans 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Power cleans 1.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Power cleans 1.mp4',
    poster: '/videos/exercises/Nielson_400m_Power cleans 1_thumb.jpg'
  },
  {
    id: 483,
    athlete: 'Nielson',
    title: 'Power cleans 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Power cleans 2.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Power cleans 2.mp4',
    poster: '/videos/exercises/Nielson_400m_Power cleans 2_thumb.jpg'
  },
  {
    id: 484,
    athlete: 'Nielson',
    title: 'RDL 2',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_RDL 2.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_RDL 2.mp4',
    poster: '/videos/exercises/Nielson_400m_RDL 2_thumb.jpg'
  },
  {
    id: 485,
    athlete: 'Nielson',
    title: 'RDL 4',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_RDL 4.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_RDL 4.mp4',
    poster: '/videos/exercises/Nielson_400m_RDL 4_thumb.jpg'
  },
  {
    id: 486,
    athlete: 'Nielson',
    title: 'Single arm dumbell snatch 1',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Single arm dumbell snatch 1.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Single arm dumbell snatch 1.mp4',
    poster: '/videos/exercises/Nielson_400m_Single arm dumbell snatch 1_thumb.jpg'
  },
  {
    id: 487,
    athlete: 'Nielson',
    title: 'Sled sprints',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Sled sprints.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Sled sprints.mp4',
    poster: '/videos/exercises/Nielson_400m_Sled sprints_thumb.jpg'
  },
  {
    id: 488,
    athlete: 'Nielson',
    title: 'Squat jumps',
    athletesSports: '400m',
    videoURL: '/videos/exercises/Nielson_400m_Squat jumps.mp4',
    videoURL_360p: '/videos/exercises/Nielson_400m_Squat jumps.mp4',
    poster: '/videos/exercises/Nielson_400m_Squat jumps_thumb.jpg'
  },
  {
    id: 489,
    athlete: 'Noah Lyles',
    title: 'Power Clean',
    athletesSports: '100m,200m',
    videoURL: '/videos/exercises/Noah Lyles_100m,200m_Power Clean.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m,200m_Power Clean.mp4',
    poster: '/videos/exercises/Noah Lyles_100m,200m_Power Clean_thumb.jpg'
  },
  {
    id: 490,
    athlete: 'Noah Lyles',
    title: '2 hang cleans 2 shoulder presses',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_2 hang cleans 2 shoulder presses.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_2 hang cleans 2 shoulder presses.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_2 hang cleans 2 shoulder presses_thumb.jpg'
  },
  {
    id: 491,
    athlete: 'Noah Lyles',
    title: '45Deg wall sprint',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_45Deg wall sprint.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_45Deg wall sprint.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_45Deg wall sprint_thumb.jpg'
  },
  {
    id: 492,
    athlete: 'Noah Lyles',
    title: '90 deg lifted legs pull ups',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_90 deg lifted legs pull ups.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_90 deg lifted legs pull ups.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_90 deg lifted legs pull ups_thumb.jpg'
  },
  {
    id: 493,
    athlete: 'Noah Lyles',
    title: 'Adductor exercise on Machine 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 1_thumb.jpg'
  },
  {
    id: 494,
    athlete: 'Noah Lyles',
    title: 'Adductor exercise on Machine 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 2_thumb.jpg'
  },
  {
    id: 495,
    athlete: 'Noah Lyles',
    title: 'Adductor exercise on Machine 3',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 3.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 3.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Adductor exercise on Machine 3_thumb.jpg'
  },
  {
    id: 496,
    athlete: 'Noah Lyles',
    title: 'back raises',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_back raises.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_back raises.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_back raises_thumb.jpg'
  },
  {
    id: 497,
    athlete: 'Noah Lyles',
    title: 'Back Squat 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Back Squat 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Back Squat 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Back Squat 1_thumb.jpg'
  },
  {
    id: 498,
    athlete: 'Noah Lyles',
    title: 'Back Squat 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Back Squat 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Back Squat 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Back Squat 2_thumb.jpg'
  },
  {
    id: 499,
    athlete: 'Noah Lyles',
    title: 'Backflip',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Backflip.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Backflip.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Backflip_thumb.jpg'
  },
  {
    id: 500,
    athlete: 'Noah Lyles',
    title: 'Banded Dumbell Step Up with Knee Drive and Shoulder Press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Banded Dumbell Step Up with Knee Drive and Shoulder Press.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Banded Dumbell Step Up with Knee Drive and Shoulder Press.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Banded Dumbell Step Up with Knee Drive and Shoulder Press_thumb.jpg'
  },
  {
    id: 501,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 1_thumb.jpg'
  },
  {
    id: 502,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 170kg x 5',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 170kg x 5.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 170kg x 5.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 170kg x 5_thumb.jpg'
  },
  {
    id: 503,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 190kg x 4',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 190kg x 4.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 190kg x 4.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 190kg x 4_thumb.jpg'
  },
  {
    id: 504,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 2.mp4',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 2.mp4.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 2.mp4.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 2.mp4_thumb.jpg'
  },
  {
    id: 505,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 200kg x 3',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 200kg x 3.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 200kg x 3.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 200kg x 3_thumb.jpg'
  },
  {
    id: 506,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 250kg',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 250kg.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 250kg.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 250kg_thumb.jpg'
  },
  {
    id: 507,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 3.mp4',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 3.mp4.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 3.mp4.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 3.mp4_thumb.jpg'
  },
  {
    id: 508,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 4.mp4',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 4.mp4.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 4.mp4.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 4.mp4_thumb.jpg'
  },
  {
    id: 509,
    athlete: 'Noah Lyles',
    title: 'Box Back Squat 5',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Back Squat 5.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Back Squat 5.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Back Squat 5_thumb.jpg'
  },
  {
    id: 510,
    athlete: 'Noah Lyles',
    title: 'Box Jump',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Box Jump.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Box Jump.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Box Jump_thumb.jpg'
  },
  {
    id: 511,
    athlete: 'Noah Lyles',
    title: 'Crunches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Crunches.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Crunches.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Crunches_thumb.jpg'
  },
  {
    id: 512,
    athlete: 'Noah Lyles',
    title: 'Deadlift',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Deadlift.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Deadlift.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Deadlift_thumb.jpg'
  },
  {
    id: 513,
    athlete: 'Noah Lyles',
    title: 'Diagonal Superman',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Diagonal Superman.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Diagonal Superman.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Diagonal Superman_thumb.jpg'
  },
  {
    id: 514,
    athlete: 'Noah Lyles',
    title: 'Dumbell Incline Press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Dumbell Incline Press.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Dumbell Incline Press.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Dumbell Incline Press_thumb.jpg'
  },
  {
    id: 515,
    athlete: 'Noah Lyles',
    title: 'Dumbell Shoulder Press 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Dumbell Shoulder Press 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Dumbell Shoulder Press 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Dumbell Shoulder Press 1_thumb.jpg'
  },
  {
    id: 516,
    athlete: 'Noah Lyles',
    title: 'Dumbell Shoulder Press 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Dumbell Shoulder Press 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Dumbell Shoulder Press 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Dumbell Shoulder Press 2_thumb.jpg'
  },
  {
    id: 517,
    athlete: 'Noah Lyles',
    title: 'Frog crunches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Frog crunches.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Frog crunches.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Frog crunches_thumb.jpg'
  },
  {
    id: 518,
    athlete: 'Noah Lyles',
    title: 'Front squat 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Front squat 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Front squat 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Front squat 2_thumb.jpg'
  },
  {
    id: 519,
    athlete: 'Noah Lyles',
    title: 'Front Squat',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Front Squat.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Front Squat.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Front Squat_thumb.jpg'
  },
  {
    id: 520,
    athlete: 'Noah Lyles',
    title: 'Front Squats',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Front Squats.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Front Squats.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Front Squats_thumb.jpg'
  },
  {
    id: 521,
    athlete: 'Noah Lyles',
    title: 'Goblett Squat 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Goblett Squat 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Goblett Squat 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Goblett Squat 1_thumb.jpg'
  },
  {
    id: 522,
    athlete: 'Noah Lyles',
    title: 'Goblett Squat 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Goblett Squat 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Goblett Squat 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Goblett Squat 2_thumb.jpg'
  },
  {
    id: 523,
    athlete: 'Noah Lyles',
    title: 'Handstand pushups',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Handstand pushups.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Handstand pushups.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Handstand pushups_thumb.jpg'
  },
  {
    id: 524,
    athlete: 'Noah Lyles',
    title: 'Hang Clean',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Hang Clean.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Hang Clean.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Hang Clean_thumb.jpg'
  },
  {
    id: 525,
    athlete: 'Noah Lyles',
    title: 'Hip Thrust On Machine 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 1_thumb.jpg'
  },
  {
    id: 526,
    athlete: 'Noah Lyles',
    title: 'Hip Thrust On Machine 2.mp4',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 2.mp4.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 2.mp4.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 2.mp4_thumb.jpg'
  },
  {
    id: 527,
    athlete: 'Noah Lyles',
    title: 'Hip Thrust On Machine 3',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 3.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 3.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Hip Thrust On Machine 3_thumb.jpg'
  },
  {
    id: 528,
    athlete: 'Noah Lyles',
    title: 'Isometric Crunch With Plate Rotation',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Isometric Crunch With Plate Rotation.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Isometric Crunch With Plate Rotation.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Isometric Crunch With Plate Rotation_thumb.jpg'
  },
  {
    id: 529,
    athlete: 'Noah Lyles',
    title: 'Leg Throws',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Leg Throws.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Leg Throws.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Leg Throws_thumb.jpg'
  },
  {
    id: 530,
    athlete: 'Noah Lyles',
    title: 'Medicine Ball Swing and Slam 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 1_thumb.jpg'
  },
  {
    id: 531,
    athlete: 'Noah Lyles',
    title: 'Medicine Ball Swing and Slam 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 2_thumb.jpg'
  },
  {
    id: 532,
    athlete: 'Noah Lyles',
    title: 'Medicine Ball Swing and Slam 3',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 3.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 3.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Medicine Ball Swing and Slam 3_thumb.jpg'
  },
  {
    id: 533,
    athlete: 'Noah Lyles',
    title: 'Mountain Climbers',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Mountain Climbers.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Mountain Climbers.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Mountain Climbers_thumb.jpg'
  },
  {
    id: 534,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 1_thumb.jpg'
  },
  {
    id: 535,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 2_thumb.jpg'
  },
  {
    id: 536,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 3',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 3.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 3.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 3_thumb.jpg'
  },
  {
    id: 537,
    athlete: 'Noah Lyles',
    title: 'Nordic Hamstring Curl 4',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 4.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 4.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Nordic Hamstring Curl 4_thumb.jpg'
  },
  {
    id: 538,
    athlete: 'Noah Lyles',
    title: 'Opposite foot and hand raise',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Opposite foot and hand raise.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Opposite foot and hand raise.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Opposite foot and hand raise_thumb.jpg'
  },
  {
    id: 539,
    athlete: 'Noah Lyles',
    title: 'Opposite leg toe touch',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Opposite leg toe touch.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Opposite leg toe touch.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Opposite leg toe touch_thumb.jpg'
  },
  {
    id: 540,
    athlete: 'Noah Lyles',
    title: 'Plank',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Plank.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Plank.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Plank_thumb.jpg'
  },
  {
    id: 541,
    athlete: 'Noah Lyles',
    title: 'Pogo hops',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Pogo hops.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Pogo hops.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Pogo hops_thumb.jpg'
  },
  {
    id: 542,
    athlete: 'Noah Lyles',
    title: 'Power Clean To Front Squat 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Power Clean To Front Squat 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Power Clean To Front Squat 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Power Clean To Front Squat 1_thumb.jpg'
  },
  {
    id: 543,
    athlete: 'Noah Lyles',
    title: 'Power Clean',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Power Clean.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Power Clean.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Power Clean_thumb.jpg'
  },
  {
    id: 544,
    athlete: 'Noah Lyles',
    title: 'Pull ups 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Pull ups 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Pull ups 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Pull ups 1_thumb.jpg'
  },
  {
    id: 545,
    athlete: 'Noah Lyles',
    title: 'Pull ups 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Pull ups 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Pull ups 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Pull ups 2_thumb.jpg'
  },
  {
    id: 546,
    athlete: 'Noah Lyles',
    title: 'Push Ups',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Push Ups.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Push Ups.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Push Ups_thumb.jpg'
  },
  {
    id: 547,
    athlete: 'Noah Lyles',
    title: 'RDL 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_RDL 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_RDL 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_RDL 1_thumb.jpg'
  },
  {
    id: 548,
    athlete: 'Noah Lyles',
    title: 'RDL 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_RDL 2.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_RDL 2.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_RDL 2_thumb.jpg'
  },
  {
    id: 549,
    athlete: 'Noah Lyles',
    title: 'RDL 3',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_RDL 3.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_RDL 3.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_RDL 3_thumb.jpg'
  },
  {
    id: 550,
    athlete: 'Noah Lyles',
    title: 'RDL 4',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_RDL 4.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_RDL 4.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_RDL 4_thumb.jpg'
  },
  {
    id: 551,
    athlete: 'Noah Lyles',
    title: 'RDL 5',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_RDL 5.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_RDL 5.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_RDL 5_thumb.jpg'
  },
  {
    id: 552,
    athlete: 'Noah Lyles',
    title: 'Reaction Exercise 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 1_thumb.jpg'
  },
  {
    id: 553,
    athlete: 'Noah Lyles',
    title: 'Reaction Exercise 2 ',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 2 .mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 2 .mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 2 _thumb.jpg'
  },
  {
    id: 554,
    athlete: 'Noah Lyles',
    title: 'Reaction Exercise 3',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 3.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 3.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Reaction Exercise 3_thumb.jpg'
  },
  {
    id: 555,
    athlete: 'Noah Lyles',
    title: 'Reverse crunches easy',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Reverse crunches easy.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Reverse crunches easy.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Reverse crunches easy_thumb.jpg'
  },
  {
    id: 556,
    athlete: 'Noah Lyles',
    title: 'Reverse crunches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Reverse crunches.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Reverse crunches.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Reverse crunches_thumb.jpg'
  },
  {
    id: 557,
    athlete: 'Noah Lyles',
    title: 'Side crunches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Side crunches.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Side crunches.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Side crunches_thumb.jpg'
  },
  {
    id: 558,
    athlete: 'Noah Lyles',
    title: 'Snatch',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Snatch.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Snatch.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Snatch_thumb.jpg'
  },
  {
    id: 559,
    athlete: 'Noah Lyles',
    title: 'Superman 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Superman 1.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Superman 1.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Superman 1_thumb.jpg'
  },
  {
    id: 560,
    athlete: 'Noah Lyles',
    title: 'Superman easy',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Superman easy.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Superman easy.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Superman easy_thumb.jpg'
  },
  {
    id: 561,
    athlete: 'Noah Lyles',
    title: 'Superman raises',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Superman raises.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Superman raises.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Superman raises_thumb.jpg'
  },
  {
    id: 562,
    athlete: 'Noah Lyles',
    title: 'Superman',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Superman.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Superman.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Superman_thumb.jpg'
  },
  {
    id: 563,
    athlete: 'Noah Lyles',
    title: 'Toe Touches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Toe Touches.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Toe Touches.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Toe Touches_thumb.jpg'
  },
  {
    id: 564,
    athlete: 'Noah Lyles',
    title: 'Training example',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Training example.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Training example.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Training example_thumb.jpg'
  },
  {
    id: 565,
    athlete: 'Noah Lyles',
    title: 'Trap Bar Deadlift with bands',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_Trap Bar Deadlift with bands.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_Trap Bar Deadlift with bands.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_Trap Bar Deadlift with bands_thumb.jpg'
  },
  {
    id: 566,
    athlete: 'Noah Lyles',
    title: 'TRX Inverted Row',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Noah Lyles_100m_TRX Inverted Row.mp4',
    videoURL_360p: '/videos/exercises/Noah Lyles_100m_TRX Inverted Row.mp4',
    poster: '/videos/exercises/Noah Lyles_100m_TRX Inverted Row_thumb.jpg'
  },
  {
    id: 567,
    athlete: 'Oleksandr Usyk',
    title: '',
    athletesSports: '2 3 Slip 3 2',
    videoURL: '/videos/exercises/Oleksandr Usyk_2 3 Slip 3 2.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_2 3 Slip 3 2.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_2 3 Slip 3 2_thumb.jpg'
  },
  {
    id: 568,
    athlete: 'Oleksandr Usyk',
    title: '',
    athletesSports: '4 3 Slip 4 3',
    videoURL: '/videos/exercises/Oleksandr Usyk_4 3 Slip 4 3.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_4 3 Slip 4 3.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_4 3 Slip 4 3_thumb.jpg'
  },
  {
    id: 569,
    athlete: 'Oleksandr Usyk',
    title: '1 3',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_1 3.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_1 3.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_1 3_thumb.jpg'
  },
  {
    id: 570,
    athlete: 'Oleksandr Usyk',
    title: '1 5 2',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_1 5 2.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_1 5 2.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_1 5 2_thumb.jpg'
  },
  {
    id: 571,
    athlete: 'Oleksandr Usyk',
    title: '1 6 2 3',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_1 6 2 3.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_1 6 2 3.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_1 6 2 3_thumb.jpg'
  },
  {
    id: 572,
    athlete: 'Oleksandr Usyk',
    title: '1 Klackalica 2',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_1 Klackalica 2.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_1 Klackalica 2.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_1 Klackalica 2_thumb.jpg'
  },
  {
    id: 573,
    athlete: 'Oleksandr Usyk',
    title: 'Angled Reverse Crunch',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Angled Reverse Crunch.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Angled Reverse Crunch.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Angled Reverse Crunch_thumb.jpg'
  },
  {
    id: 574,
    athlete: 'Oleksandr Usyk',
    title: 'Directs',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Directs.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Directs.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Directs_thumb.jpg'
  },
  {
    id: 575,
    athlete: 'Oleksandr Usyk',
    title: 'Hooks',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Hooks.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Hooks.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Hooks_thumb.jpg'
  },
  {
    id: 576,
    athlete: 'Oleksandr Usyk',
    title: 'Long  Uppercuts',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Long  Uppercuts.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Long  Uppercuts.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Long  Uppercuts_thumb.jpg'
  },
  {
    id: 577,
    athlete: 'Oleksandr Usyk',
    title: 'Only Lead Hand Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Only Lead Hand Drill.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Only Lead Hand Drill.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Only Lead Hand Drill_thumb.jpg'
  },
  {
    id: 578,
    athlete: 'Oleksandr Usyk',
    title: 'Only Rear Hand Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Only Rear Hand Drill.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Only Rear Hand Drill.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Only Rear Hand Drill_thumb.jpg'
  },
  {
    id: 579,
    athlete: 'Oleksandr Usyk',
    title: 'Shadow Boxing Both Hands',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Shadow Boxing Both Hands.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Shadow Boxing Both Hands.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Shadow Boxing Both Hands_thumb.jpg'
  },
  {
    id: 580,
    athlete: 'Oleksandr Usyk',
    title: 'Uppercut Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Uppercut Drill.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Uppercut Drill.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Uppercut Drill_thumb.jpg'
  },
  {
    id: 581,
    athlete: 'Oleksandr Usyk',
    title: 'Uppercuts',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Oleksandr Usyk_Boxing_Uppercuts.mp4',
    videoURL_360p: '/videos/exercises/Oleksandr Usyk_Boxing_Uppercuts.mp4',
    poster: '/videos/exercises/Oleksandr Usyk_Boxing_Uppercuts_thumb.jpg'
  },
  {
    id: 582,
    athlete: 'Sergei Raab',
    title: 'Kettlebel Straight Punch Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Sergei Raab_Boxing_Kettlebel Straight Punch Drill.mp4',
    videoURL_360p: '/videos/exercises/Sergei Raab_Boxing_Kettlebel Straight Punch Drill.mp4',
    poster: '/videos/exercises/Sergei Raab_Boxing_Kettlebel Straight Punch Drill_thumb.jpg'
  },
  {
    id: 583,
    athlete: 'Spencer Dinwiddie',
    title: 'Smith Machine Eccentric single leg box squat',
    athletesSports: 'Basketball',
    videoURL: '/videos/exercises/Spencer Dinwiddie_Basketball_Smith Machine Eccentric single leg box squat.mp4',
    videoURL_360p: '/videos/exercises/Spencer Dinwiddie_Basketball_Smith Machine Eccentric single leg box squat.mp4',
    poster: '/videos/exercises/Spencer Dinwiddie_Basketball_Smith Machine Eccentric single leg box squat_thumb.jpg'
  },
  {
    id: 584,
    athlete: 'Terence Crawford',
    title: '2 1 3 2',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_2 1 3 2.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_2 1 3 2.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_2 1 3 2_thumb.jpg'
  },
  {
    id: 585,
    athlete: 'Terence Crawford',
    title: '3 2 and 2 3',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_3 2 and 2 3.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_3 2 and 2 3.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_3 2 and 2 3_thumb.jpg'
  },
  {
    id: 586,
    athlete: 'Terence Crawford',
    title: '3 3 6',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_3 3 6.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_3 3 6.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_3 3 6_thumb.jpg'
  },
  {
    id: 587,
    athlete: 'Terence Crawford',
    title: '6 3 3',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_6 3 3.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_6 3 3.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_6 3 3_thumb.jpg'
  },
  {
    id: 588,
    athlete: 'Terence Crawford',
    title: '6B 5B Roll 3 2',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_6B 5B Roll 3 2.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_6B 5B Roll 3 2.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_6B 5B Roll 3 2_thumb.jpg'
  },
  {
    id: 589,
    athlete: 'Terence Crawford',
    title: 'Constant light 1 2s between hard body punches',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Constant light 1 2s between hard body punches.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Constant light 1 2s between hard body punches.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Constant light 1 2s between hard body punches_thumb.jpg'
  },
  {
    id: 590,
    athlete: 'Terence Crawford',
    title: 'Constant Up and Down Punches',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Constant Up and Down Punches.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Constant Up and Down Punches.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Constant Up and Down Punches_thumb.jpg'
  },
  {
    id: 591,
    athlete: 'Terence Crawford',
    title: 'Keep changing position while throwing uppercuts',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Keep changing position while throwing uppercuts.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Keep changing position while throwing uppercuts.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Keep changing position while throwing uppercuts_thumb.jpg'
  },
  {
    id: 592,
    athlete: 'Terence Crawford',
    title: 'Pivot Off after Double Right hand',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Pivot Off after Double Right hand.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Pivot Off after Double Right hand.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Pivot Off after Double Right hand_thumb.jpg'
  },
  {
    id: 593,
    athlete: 'Terence Crawford',
    title: 'Pivot off throw multiple jabs',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Pivot off throw multiple jabs.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Pivot off throw multiple jabs.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Pivot off throw multiple jabs_thumb.jpg'
  },
  {
    id: 594,
    athlete: 'Terence Crawford',
    title: 'Slight Shift after lead hook',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Slight Shift after lead hook.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Slight Shift after lead hook.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Slight Shift after lead hook_thumb.jpg'
  },
  {
    id: 595,
    athlete: 'Terence Crawford',
    title: 'Slip Roll Pivot Hook Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Slip Roll Pivot Hook Drill.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Slip Roll Pivot Hook Drill.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Slip Roll Pivot Hook Drill_thumb.jpg'
  },
  {
    id: 596,
    athlete: 'Terence Crawford',
    title: 'Triple a side after bag swing',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Terence Crawford_Boxing_Triple a side after bag swing.mp4',
    videoURL_360p: '/videos/exercises/Terence Crawford_Boxing_Triple a side after bag swing.mp4',
    poster: '/videos/exercises/Terence Crawford_Boxing_Triple a side after bag swing_thumb.jpg'
  },
  {
    id: 597,
    athlete: 'Unknown Athlete',
    title: 'Inside Slip Left Hook Counter',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Unknown Athlete_Boxing_Inside Slip Left Hook Counter.mp4',
    videoURL_360p: '/videos/exercises/Unknown Athlete_Boxing_Inside Slip Left Hook Counter.mp4',
    poster: '/videos/exercises/Unknown Athlete_Boxing_Inside Slip Left Hook Counter_thumb.jpg'
  },
  {
    id: 598,
    athlete: 'Unknown',
    title: '1 2 5 2 1 6',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Unknown_Boxing_1 2 5 2 1 6.mp4',
    videoURL_360p: '/videos/exercises/Unknown_Boxing_1 2 5 2 1 6.mp4',
    poster: '/videos/exercises/Unknown_Boxing_1 2 5 2 1 6_thumb.jpg'
  },
  {
    id: 599,
    athlete: 'Unknown',
    title: 'Angle Changes',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Unknown_Boxing_Angle Changes.mp4',
    videoURL_360p: '/videos/exercises/Unknown_Boxing_Angle Changes.mp4',
    poster: '/videos/exercises/Unknown_Boxing_Angle Changes_thumb.jpg'
  },
  {
    id: 600,
    athlete: 'Unknown',
    title: 'In and Out drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Unknown_Boxing_In and Out drill.mp4',
    videoURL_360p: '/videos/exercises/Unknown_Boxing_In and Out drill.mp4',
    poster: '/videos/exercises/Unknown_Boxing_In and Out drill_thumb.jpg'
  },
  {
    id: 601,
    athlete: 'Unknown',
    title: 'Repetitive Lead Hooks',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Unknown_Boxing_Repetitive Lead Hooks.mp4',
    videoURL_360p: '/videos/exercises/Unknown_Boxing_Repetitive Lead Hooks.mp4',
    poster: '/videos/exercises/Unknown_Boxing_Repetitive Lead Hooks_thumb.jpg'
  },
  {
    id: 602,
    athlete: 'Unknown',
    title: '',
    athletesSports: 'Track and field',
    videoURL: '/videos/exercises/Unknown_Track and field_.mp4',
    videoURL_360p: '/videos/exercises/Unknown_Track and field_.mp4',
    poster: '/videos/exercises/Unknown_Track and field__thumb.jpg'
  },
  {
    id: 603,
    athlete: 'Unknown',
    title: '1',
    athletesSports: 'Track and field',
    videoURL: '/videos/exercises/Unknown_Track and field_1.mp4',
    videoURL_360p: '/videos/exercises/Unknown_Track and field_1.mp4',
    poster: '/videos/exercises/Unknown_Track and field_1_thumb.jpg'
  },
  {
    id: 604,
    athlete: 'Usain Bolt',
    title: 'Abs crunch on machine',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Abs crunch on machine.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Abs crunch on machine.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Abs crunch on machine_thumb.jpg'
  },
  {
    id: 605,
    athlete: 'Usain Bolt',
    title: 'Back Extension on Roman Chair 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Back Extension on Roman Chair 1.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Back Extension on Roman Chair 1.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Back Extension on Roman Chair 1_thumb.jpg'
  },
  {
    id: 606,
    athlete: 'Usain Bolt',
    title: 'Back Raise Medicine Balll Throw',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Back Raise Medicine Balll Throw.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Back Raise Medicine Balll Throw.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Back Raise Medicine Balll Throw_thumb.jpg'
  },
  {
    id: 607,
    athlete: 'Usain Bolt',
    title: 'Calv raises',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Calv raises.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Calv raises.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Calv raises_thumb.jpg'
  },
  {
    id: 608,
    athlete: 'Usain Bolt',
    title: 'Crunch Knee Drives',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Crunch Knee Drives.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Crunch Knee Drives.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Crunch Knee Drives_thumb.jpg'
  },
  {
    id: 609,
    athlete: 'Usain Bolt',
    title: 'Crunch Medicine Ball Throws',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Crunch Medicine Ball Throws.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Crunch Medicine Ball Throws.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Crunch Medicine Ball Throws_thumb.jpg'
  },
  {
    id: 610,
    athlete: 'Usain Bolt',
    title: 'Crunches Single Leg Knee Raises',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Crunches Single Leg Knee Raises.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Crunches Single Leg Knee Raises.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Crunches Single Leg Knee Raises_thumb.jpg'
  },
  {
    id: 611,
    athlete: 'Usain Bolt',
    title: 'Crunches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Crunches.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Crunches.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Crunches_thumb.jpg'
  },
  {
    id: 612,
    athlete: 'Usain Bolt',
    title: 'Donkey Kicks on machine',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Donkey Kicks on machine.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Donkey Kicks on machine.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Donkey Kicks on machine_thumb.jpg'
  },
  {
    id: 613,
    athlete: 'Usain Bolt',
    title: 'Hip Flexor Knee Drives',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Hip Flexor Knee Drives.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Hip Flexor Knee Drives.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Hip Flexor Knee Drives_thumb.jpg'
  },
  {
    id: 614,
    athlete: 'Usain Bolt',
    title: 'Hurdle Stepovers',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Hurdle Stepovers.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Hurdle Stepovers.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Hurdle Stepovers_thumb.jpg'
  },
  {
    id: 615,
    athlete: 'Usain Bolt',
    title: 'Knee extension on machine',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Knee extension on machine.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Knee extension on machine.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Knee extension on machine_thumb.jpg'
  },
  {
    id: 616,
    athlete: 'Usain Bolt',
    title: 'Leg press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Leg press.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Leg press.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Leg press_thumb.jpg'
  },
  {
    id: 617,
    athlete: 'Usain Bolt',
    title: 'Mountain Climbers',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Mountain Climbers.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Mountain Climbers.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Mountain Climbers_thumb.jpg'
  },
  {
    id: 618,
    athlete: 'Usain Bolt',
    title: 'Plank',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Plank.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Plank.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Plank_thumb.jpg'
  },
  {
    id: 619,
    athlete: 'Usain Bolt',
    title: 'Repetetive Hang Cleans',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Repetetive Hang Cleans.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Repetetive Hang Cleans.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Repetetive Hang Cleans_thumb.jpg'
  },
  {
    id: 620,
    athlete: 'Usain Bolt',
    title: 'Reverse crunch knee drives',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Reverse crunch knee drives.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Reverse crunch knee drives.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Reverse crunch knee drives_thumb.jpg'
  },
  {
    id: 621,
    athlete: 'Usain Bolt',
    title: 'Russian Twists 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Russian Twists 1.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Russian Twists 1.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Russian Twists 1_thumb.jpg'
  },
  {
    id: 622,
    athlete: 'Usain Bolt',
    title: 'Russian Twists 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Russian Twists 2.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Russian Twists 2.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Russian Twists 2_thumb.jpg'
  },
  {
    id: 623,
    athlete: 'Usain Bolt',
    title: 'Russian Twists',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Russian Twists.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Russian Twists.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Russian Twists_thumb.jpg'
  },
  {
    id: 624,
    athlete: 'Usain Bolt',
    title: 'Scissors',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Scissors.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Scissors.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Scissors_thumb.jpg'
  },
  {
    id: 625,
    athlete: 'Usain Bolt',
    title: 'Single Leg Crunch Toe Touches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Single Leg Crunch Toe Touches.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Single Leg Crunch Toe Touches.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Single Leg Crunch Toe Touches_thumb.jpg'
  },
  {
    id: 626,
    athlete: 'Usain Bolt',
    title: 'Sit ups with barbell press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Sit ups with barbell press.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Sit ups with barbell press.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Sit ups with barbell press_thumb.jpg'
  },
  {
    id: 627,
    athlete: 'Usain Bolt',
    title: 'Step up Knee Drives',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Step up Knee Drives.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Step up Knee Drives.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Step up Knee Drives_thumb.jpg'
  },
  {
    id: 628,
    athlete: 'Usain Bolt',
    title: 'Techincal Skips Over Cones',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Techincal Skips Over Cones.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Techincal Skips Over Cones.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Techincal Skips Over Cones_thumb.jpg'
  },
  {
    id: 629,
    athlete: 'Usain Bolt',
    title: 'TRX Plank Knee Drives',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_TRX Plank Knee Drives.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_TRX Plank Knee Drives.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_TRX Plank Knee Drives_thumb.jpg'
  },
  {
    id: 630,
    athlete: 'Usain Bolt',
    title: 'Yoga Ball Crunches',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Usain Bolt_100m_Yoga Ball Crunches.mp4',
    videoURL_360p: '/videos/exercises/Usain Bolt_100m_Yoga Ball Crunches.mp4',
    poster: '/videos/exercises/Usain Bolt_100m_Yoga Ball Crunches_thumb.jpg'
  },
  {
    id: 631,
    athlete: 'Viktor Pyshkin',
    title: '20kg barbell Rotations',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_20kg barbell Rotations.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_20kg barbell Rotations.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_20kg barbell Rotations_thumb.jpg'
  },
  {
    id: 632,
    athlete: 'Viktor Pyshkin',
    title: 'Barbell Directs',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Directs.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Directs.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Directs_thumb.jpg'
  },
  {
    id: 633,
    athlete: 'Viktor Pyshkin',
    title: 'Barbell Uppercuts to the body',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Uppercuts to the body.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Uppercuts to the body.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Uppercuts to the body_thumb.jpg'
  },
  {
    id: 634,
    athlete: 'Viktor Pyshkin',
    title: 'Barbell Uppercuts to the head',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Uppercuts to the head.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Uppercuts to the head.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Barbell Uppercuts to the head_thumb.jpg'
  },
  {
    id: 635,
    athlete: 'Viktor Pyshkin',
    title: 'Cross 2kg Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Cross 2kg Drill.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Cross 2kg Drill.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Cross 2kg Drill_thumb.jpg'
  },
  {
    id: 636,
    athlete: 'Viktor Pyshkin',
    title: 'Directs 2kg Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Directs 2kg Drill.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Directs 2kg Drill.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Directs 2kg Drill_thumb.jpg'
  },
  {
    id: 637,
    athlete: 'Viktor Pyshkin',
    title: 'Jumps on plate',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Jumps on plate.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Jumps on plate.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Jumps on plate_thumb.jpg'
  },
  {
    id: 638,
    athlete: 'Viktor Pyshkin',
    title: 'Kettlbell semi-squat and jump',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Kettlbell semi-squat and jump.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Kettlbell semi-squat and jump.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Kettlbell semi-squat and jump_thumb.jpg'
  },
  {
    id: 639,
    athlete: 'Viktor Pyshkin',
    title: 'Lateral jumps on plate',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Lateral jumps on plate.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Lateral jumps on plate.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Lateral jumps on plate_thumb.jpg'
  },
  {
    id: 640,
    athlete: 'Viktor Pyshkin',
    title: 'Plate Defense',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Plate Defense.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Plate Defense.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Plate Defense_thumb.jpg'
  },
  {
    id: 641,
    athlete: 'Viktor Pyshkin',
    title: 'Plate Shadow Boxing',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Plate Shadow Boxing.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Plate Shadow Boxing.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Plate Shadow Boxing_thumb.jpg'
  },
  {
    id: 642,
    athlete: 'Viktor Pyshkin',
    title: 'Tennis Ball Shadow Boxing',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Viktor Pyshkin_Boxing_Tennis Ball Shadow Boxing.mp4',
    videoURL_360p: '/videos/exercises/Viktor Pyshkin_Boxing_Tennis Ball Shadow Boxing.mp4',
    poster: '/videos/exercises/Viktor Pyshkin_Boxing_Tennis Ball Shadow Boxing_thumb.jpg'
  },
  {
    id: 643,
    athlete: 'Xiong Zhengqi',
    title: 'Back Step Lead Hook',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Back Step Lead Hook.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Back Step Lead Hook.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Back Step Lead Hook_thumb.jpg'
  },
  {
    id: 644,
    athlete: 'Xiong Zhengqi',
    title: 'Single Punch Push Up for Back Advanced',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Single Punch Push Up for Back Advanced.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Single Punch Push Up for Back Advanced.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Single Punch Push Up for Back Advanced_thumb.jpg'
  },
  {
    id: 645,
    athlete: 'Xiong Zhengqi',
    title: 'Single Punch Push Up for Back Medium',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Single Punch Push Up for Back Medium.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Single Punch Push Up for Back Medium.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Single Punch Push Up for Back Medium_thumb.jpg'
  },
  {
    id: 646,
    athlete: 'Xiong Zhengqi',
    title: 'Slow To Power Straight Punch Drill',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Slow To Power Straight Punch Drill.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Slow To Power Straight Punch Drill.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Slow To Power Straight Punch Drill_thumb.jpg'
  },
  {
    id: 647,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps Hand to Fist',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps Hand to Fist.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps Hand to Fist.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps Hand to Fist_thumb.jpg'
  },
  {
    id: 648,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps on Fists',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps on Fists.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps on Fists.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps on Fists_thumb.jpg'
  },
  {
    id: 649,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps on Hands',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps on Hands.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps on Hands.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps on Hands_thumb.jpg'
  },
  {
    id: 650,
    athlete: 'Xiong Zhengqi',
    title: 'Upper Body PushUps Scissor',
    athletesSports: 'Boxing',
    videoURL: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps Scissor.mp4',
    videoURL_360p: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps Scissor.mp4',
    poster: '/videos/exercises/Xiong Zhengqi_Boxing_Upper Body PushUps Scissor_thumb.jpg'
  },
  {
    id: 651,
    athlete: 'Yohan Blake',
    title: 'Back Extension on Roman Chair 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair 1.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair 1.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair 1_thumb.jpg'
  },
  {
    id: 652,
    athlete: 'Yohan Blake',
    title: 'Back Extension on Roman Chair 2',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair 2.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair 2.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair 2_thumb.jpg'
  },
  {
    id: 653,
    athlete: 'Yohan Blake',
    title: 'Back Extension on Roman Chair',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Back Extension on Roman Chair_thumb.jpg'
  },
  {
    id: 654,
    athlete: 'Yohan Blake',
    title: 'Bar Knee Raises',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Bar Knee Raises.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Bar Knee Raises.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Bar Knee Raises_thumb.jpg'
  },
  {
    id: 655,
    athlete: 'Yohan Blake',
    title: 'Calv Raises on Machine',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Calv Raises on Machine.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Calv Raises on Machine.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Calv Raises on Machine_thumb.jpg'
  },
  {
    id: 656,
    athlete: 'Yohan Blake',
    title: 'Deadlift 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Deadlift 1.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Deadlift 1.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Deadlift 1_thumb.jpg'
  },
  {
    id: 657,
    athlete: 'Yohan Blake',
    title: 'Deadlift',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Deadlift.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Deadlift.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Deadlift_thumb.jpg'
  },
  {
    id: 658,
    athlete: 'Yohan Blake',
    title: 'Donkey kick on Machine',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Donkey kick on Machine.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Donkey kick on Machine.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Donkey kick on Machine_thumb.jpg'
  },
  {
    id: 659,
    athlete: 'Yohan Blake',
    title: 'Dumbell Row 1',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Dumbell Row 1.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Dumbell Row 1.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Dumbell Row 1_thumb.jpg'
  },
  {
    id: 660,
    athlete: 'Yohan Blake',
    title: 'Dumbell Row',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Dumbell Row.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Dumbell Row.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Dumbell Row_thumb.jpg'
  },
  {
    id: 661,
    athlete: 'Yohan Blake',
    title: 'Hip Flexor Knee Drives',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Hip Flexor Knee Drives.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Hip Flexor Knee Drives.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Hip Flexor Knee Drives_thumb.jpg'
  },
  {
    id: 662,
    athlete: 'Yohan Blake',
    title: 'Hip Thrusts',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Hip Thrusts.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Hip Thrusts.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Hip Thrusts_thumb.jpg'
  },
  {
    id: 663,
    athlete: 'Yohan Blake',
    title: 'Hurdle Jumps',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Hurdle Jumps.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Hurdle Jumps.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Hurdle Jumps_thumb.jpg'
  },
  {
    id: 664,
    athlete: 'Yohan Blake',
    title: 'Incline Bench Press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Incline Bench Press.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Incline Bench Press.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Incline Bench Press_thumb.jpg'
  },
  {
    id: 665,
    athlete: 'Yohan Blake',
    title: 'Knee Raises Dip Bar',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Knee Raises Dip Bar.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Knee Raises Dip Bar.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Knee Raises Dip Bar_thumb.jpg'
  },
  {
    id: 666,
    athlete: 'Yohan Blake',
    title: 'Kneeling Jumps to Box Jump',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Kneeling Jumps to Box Jump.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Kneeling Jumps to Box Jump.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Kneeling Jumps to Box Jump_thumb.jpg'
  },
  {
    id: 667,
    athlete: 'Yohan Blake',
    title: 'Lunges',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Lunges.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Lunges.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Lunges_thumb.jpg'
  },
  {
    id: 668,
    athlete: 'Yohan Blake',
    title: 'Medicine Ball Wall Throw Backwards',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Medicine Ball Wall Throw Backwards.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Medicine Ball Wall Throw Backwards.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Medicine Ball Wall Throw Backwards_thumb.jpg'
  },
  {
    id: 669,
    athlete: 'Yohan Blake',
    title: 'Medicine Ball Wall Throws',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Medicine Ball Wall Throws.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Medicine Ball Wall Throws.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Medicine Ball Wall Throws_thumb.jpg'
  },
  {
    id: 670,
    athlete: 'Yohan Blake',
    title: 'Nordic Hamstring Curls',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Nordic Hamstring Curls.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Nordic Hamstring Curls.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Nordic Hamstring Curls_thumb.jpg'
  },
  {
    id: 671,
    athlete: 'Yohan Blake',
    title: 'Quarter Leg Press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Quarter Leg Press.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Quarter Leg Press.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Quarter Leg Press_thumb.jpg'
  },
  {
    id: 672,
    athlete: 'Yohan Blake',
    title: 'Resisted Sprinting',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Resisted Sprinting.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Resisted Sprinting.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Resisted Sprinting_thumb.jpg'
  },
  {
    id: 673,
    athlete: 'Yohan Blake',
    title: 'Seated Medicine Ball Throw Backwards',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Seated Medicine Ball Throw Backwards.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Seated Medicine Ball Throw Backwards.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Seated Medicine Ball Throw Backwards_thumb.jpg'
  },
  {
    id: 674,
    athlete: 'Yohan Blake',
    title: 'Seated Resisted Jumps',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Seated Resisted Jumps.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Seated Resisted Jumps.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Seated Resisted Jumps_thumb.jpg'
  },
  {
    id: 675,
    athlete: 'Yohan Blake',
    title: 'Shoulder Press',
    athletesSports: '100m',
    videoURL: '/videos/exercises/Yohan Blake_100m_Shoulder Press.mp4',
    videoURL_360p: '/videos/exercises/Yohan Blake_100m_Shoulder Press.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Shoulder Press_thumb.jpg'
  },*/
  {
    id: 676,
    athlete: 'Yohan Blake',
    title: 'Side Plank Raises',
    athletesSports: '100m',
    videoURL: 'https://stream.vidhosting.in/videos/88c69d40.mp4',
    videoURL_360p: 'https://stream.vidhosting.in/videos/88c69d40.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Side Plank Raises_thumb.jpg'
  },
  {
    id: 677,
    athlete: 'Yohan Blake',
    title: 'Single Leg Glute Bridge',
    athletesSports: '100m',
    videoURL: 'https://stream.vidhosting.in/videos/ad73e629.mp4',
    videoURL_360p: 'https://stream.vidhosting.in/videos/ad73e629.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Single Leg Glute Bridge_thumb.jpg'
  },
  {
    id: 678,
    athlete: 'Yohan Blake',
    title: 'Single leg seated squats',
    athletesSports: '100m',
    videoURL: 'https://stream.vidhosting.in/videos/496ebe78.mp4',
    videoURL_360p: 'https://stream.vidhosting.in/videos/496ebe78.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Single leg seated squats_thumb.jpg'
  },
  {
    id: 679,
    athlete: 'Yohan Blake',
    title: 'Sled Pushing',
    athletesSports: '100m',
    videoURL: 'https://stream.vidhosting.in/videos/6172cdef.mp4',
    videoURL_360p: 'https://stream.vidhosting.in/videos/6172cdef.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Sled Pushing_thumb.jpg'
  },
  {
    id: 680,
    athlete: 'Yohan Blake',
    title: 'Step up',
    athletesSports: '100m',
    videoURL: 'https://stream.vidhosting.in/videos/171745c2.mp4',
    videoURL_360p: 'https://stream.vidhosting.in/videos/171745c2.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Step up_thumb.jpg'
  },
  {
    id: 681,
    athlete: 'Yohan Blake',
    title: 'Trap Bar Jumps',
    athletesSports: '100m',
    videoURL: 'https://stream.vidhosting.in/videos/86dc1997.mp4',
    videoURL_360p: 'https://stream.vidhosting.in/videos/86dc1997.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Trap Bar Jumps_thumb.jpg'
  },
  {
    id: 682,
    athlete: 'Yohan Blake',
    title: 'Treadmill Running',
    athletesSports: '100m',
    videoURL: 'https://stream.vidhosting.in/videos/66b29b69.mp4',
    videoURL_360p: 'https://stream.vidhosting.in/videos/66b29b69.mp4',
    poster: '/videos/exercises/Yohan Blake_100m_Treadmill Running_thumb.jpg'
  }
]; 
export default exercises; 
