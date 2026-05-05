import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getWorkouts, deleteWorkout, renameWorkout } from '../../services/appwriteWorkoutExercises';

const WorkoutCreatorCard = ({ onWorkoutSelect }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRenamePopup, setShowRenamePopup] = useState(false);
  const [workoutName, setWorkoutName] = useState('');
  const [newWorkoutName, setNewWorkoutName] = useState('');
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const userId = user?.name;

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (userId) {
        try {
          const userWorkouts = await getWorkouts(userId);
          setWorkouts(userWorkouts);
        } catch (error) {
          console.error('Error fetching workouts:', error);
        }
      }
    };

    fetchWorkouts();
  }, [userId]);

  const handleCreateWorkout = () => {
    if (!workoutName.trim()) {
      alert('Please enter a workout name');
      return;
    }

    if (workouts.includes(workoutName)) {
      alert('A workout with this name already exists');
      return;
    }

    setWorkouts([...workouts, workoutName]);
    setSelectedWorkout(workoutName);
    onWorkoutSelect(workoutName);
    setWorkoutName('');
    setShowPopup(false);
  };

  const handleSelectWorkout = (e) => {
    const selected = e.target.value;
    setSelectedWorkout(selected);
    onWorkoutSelect(selected);
  };

  const handleRenameWorkout = async () => {
    if (!newWorkoutName.trim()) {
      alert('Please enter a new workout name');
      return;
    }

    if (newWorkoutName === selectedWorkout) {
      alert('New name must be different from the current name');
      return;
    }

    if (workouts.includes(newWorkoutName)) {
      alert('A workout with this name already exists');
      return;
    }

    setLoading(true);
    try {
      await renameWorkout(userId, selectedWorkout, newWorkoutName);
      
      // Update the workouts list
      const updatedWorkouts = workouts.map(w => w === selectedWorkout ? newWorkoutName : w);
      setWorkouts(updatedWorkouts);
      
      // Update selected workout
      setSelectedWorkout(newWorkoutName);
      onWorkoutSelect(newWorkoutName);
      setNewWorkoutName('');
      setShowRenamePopup(false);
    } catch (error) {
      console.error('Error renaming workout:', error);
      alert('Failed to rename workout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWorkout = async () => {
    if (!window.confirm(`Are you sure you want to delete "${selectedWorkout}" and all its exercises?`)) {
      return;
    }

    setLoading(true);
    try {
      await deleteWorkout(userId, selectedWorkout);
      
      // Remove from the workouts list
      const updatedWorkouts = workouts.filter(w => w !== selectedWorkout);
      setWorkouts(updatedWorkouts);
      
      // Clear selection
      setSelectedWorkout('');
      onWorkoutSelect('');
    } catch (error) {
      console.error('Error deleting workout:', error);
      alert('Failed to delete workout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workout-creator-card">
      <h2 className="workout-creator-title">💪 Workout Creator</h2>
      
      {/* Workout selection */}
      <div className="workout-selection">
        <select 
          value={selectedWorkout} 
          onChange={handleSelectWorkout}
          className="workout-select"
        >
          <option value="">Select a workout</option>
          {workouts.map((workout, index) => (
            <option key={index} value={workout}>
              {workout}
            </option>
          ))}
        </select>
        
        <button 
          className="create-workout-btn"
          onClick={() => setShowPopup(true)}
        >
          ➕ Create New
        </button>
      </div>

      {/* Current workout display with action buttons */}
      {selectedWorkout && (
        <div className="current-workout">
          <div className="current-workout-header">
            <h3>Current Workout: <span className="workout-name-highlight">{selectedWorkout}</span></h3>
            <div className="workout-action-buttons">
              <button 
                className="workout-action-btn rename-btn"
                onClick={() => setShowRenamePopup(true)}
                disabled={loading}
                title="Rename workout"
              >
                ✏️ Rename
              </button>
              <button 
                className="workout-action-btn delete-btn"
                onClick={handleDeleteWorkout}
                disabled={loading}
                title="Delete workout"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create workout popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Create New Workout</h3>
            <input
              type="text"
              placeholder="Enter workout name"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              className="workout-name-input"
              onKeyPress={(e) => e.key === 'Enter' && handleCreateWorkout()}
            />
            <div className="popup-buttons">
              <button onClick={handleCreateWorkout} className="popup-btn-create">Create</button>
              <button onClick={() => setShowPopup(false)} className="popup-btn-cancel">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Rename workout popup */}
      {showRenamePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Rename Workout</h3>
            <p className="popup-subtitle">Current name: <strong>{selectedWorkout}</strong></p>
            <input
              type="text"
              placeholder="Enter new workout name"
              value={newWorkoutName}
              onChange={(e) => setNewWorkoutName(e.target.value)}
              className="workout-name-input"
              onKeyPress={(e) => e.key === 'Enter' && !loading && handleRenameWorkout()}
              disabled={loading}
            />
            <div className="popup-buttons">
              <button onClick={handleRenameWorkout} className="popup-btn-create" disabled={loading}>
                {loading ? 'Renaming...' : 'Rename'}
              </button>
              <button onClick={() => setShowRenamePopup(false)} className="popup-btn-cancel" disabled={loading}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutCreatorCard;