import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import WorkoutCreatorCard from '../components/WorkoutCreatorCard'
import WorkoutCreatorExercises from '../components/WorkoutCreatorExercises'
import WorkoutReplaceExercises from '../components/WorkoutReplaceExercises'
import WorkoutExerciseCard from '../components/WorkoutExerciseCard'
import { useAuth } from '../context/AuthContext'
import {
  getWorkoutExercises,
  updateExerciseOrder,
  deleteWorkoutExercise,
  updateWorkoutExercise,
  duplicateWorkoutExercise,
  duplicateWorkoutExerciseToEnd,
  setRestsBetweenExercises,
  duplicateWorkout
} from '../../services/appwriteWorkoutExercises'
import Masonry from 'react-masonry-css'
import WorkoutHeader from '../components/WorkoutHeader'
import ExerciseItem from '../components/ExerciseItem'
import { getWorkouts } from '../../services/appwriteWorkoutExercises'

/* =========================
   Inline modal komponenta
   ========================= */
const ExerciseEditModal = ({
  isOpen,
  onClose,
  editFormData,
  onEditFormChange,
  onSaveEdit,
  onReplaceClick,
  exerciseTitle
}) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content workout-details-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Uredi vježbu{exerciseTitle ? `: ${exerciseTitle}` : ''}</h3>

        <div className="workout-details-form">
          {['reps','time','load','equipment'].map((field) => (
            <div className="form-group" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type={field === 'equipment' ? 'text' : 'number'}
                name={field}
                value={editFormData[field]}
                min={field !== 'equipment' ? '0' : undefined}
                onChange={onEditFormChange}
              />
            </div>
          ))}

          <div className="form-group">
            <label>Notes:</label>
            <textarea
              name="notes"
              value={editFormData.notes}
              onChange={onEditFormChange}
            />
          </div>
        </div>

        <div className="modal-actions">
          <button className="save-button" onClick={onSaveEdit}>Save</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          {onReplaceClick && (
            <button className="replace-button" onClick={onReplaceClick}>
              Replace
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const WorkoutCreator = () => {
  const [currentWorkout, setCurrentWorkout] = useState('')
  const [workoutExercises, setWorkoutExercises] = useState([])
  const [viewMode, setViewMode] = useState('grid')
  const [restSeconds, setRestSeconds] = useState(30)

  // DUPLICATE (choice modal for exercise placement)
  const [showDuplicateModal, setShowDuplicateModal] = useState(false)
  const [duplicatingExerciseId, setDuplicatingExerciseId] = useState(null)

  // WORKOUT DUPLICATION (modal for new workout name)
  const [showDuplicateWorkoutModal, setShowDuplicateWorkoutModal] = useState(false)
  const [newWorkoutName, setNewWorkoutName] = useState('')

  // Duration projection (in seconds)
  const [estimatedDuration, setEstimatedDuration] = useState(0)
 
   // EDIT (modal)
   const [showEditModal, setShowEditModal] = useState(false)
   const [editingExerciseId, setEditingExerciseId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    reps: '',
    time: '',
    load: '',
    equipment: '',
    notes: ''
  })

  // REPLACE overlay
  const [replacingExerciseId, setReplacingExerciseId] = useState(null)

  const { user } = useAuth()
  const userId = user?.name
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWorkoutExercises = async () => {
      if (userId && currentWorkout) {
        try {
          const exercises = await getWorkoutExercises(userId, currentWorkout)
          setWorkoutExercises(exercises)
        } catch (error) {
          console.error('Error fetching workout exercises:', error)
        }
      } else {
        setWorkoutExercises([])
      }
    }
    fetchWorkoutExercises()
  }, [userId, currentWorkout])

  const handleWorkoutSelect = (workoutName) => setCurrentWorkout(workoutName)

  // Duration projection calc
  useEffect(() => {
    const toSeconds = (ex) => {
      if (!ex) return 0;
      const title = String(ex.exerciseTitle || '').toLowerCase();
      const isRest = ex.athlete === 'Rest' || title.includes('rest');
      const timeVal = typeof ex.time === 'number' ? ex.time : Number(ex.time);
      const repsVal = typeof ex.reps === 'number' ? ex.reps : Number(ex.reps);
      if (!isNaN(timeVal) && timeVal > 0) return Math.floor(timeVal);
      if (!isNaN(repsVal) && repsVal > 0) return Math.round(repsVal * 2.5);
      return 0;
    };
    const total = (workoutExercises || []).reduce((sum, ex) => sum + toSeconds(ex), 0);
    setEstimatedDuration(total);
  }, [workoutExercises]);

  const formatDuration = (totalSeconds) => {
    const s = Math.max(0, Math.floor(totalSeconds || 0));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
    if (h > 0) return `${h}:${pad(m)}:${pad(sec)}`;
    return `${m}:${pad(sec)}`;
  };

  // Duplicate Workout (modal) handlers
  const openDuplicateWorkout = () => {
    if (!currentWorkout) {
      alert('Prvo izaberite trening.');
      return;
    }
    setNewWorkoutName(`${currentWorkout} Copy`);
    setShowDuplicateWorkoutModal(true);
  };

  const cancelDuplicateWorkout = () => {
    setShowDuplicateWorkoutModal(false);
    setNewWorkoutName('');
  };

  const confirmDuplicateWorkout = async () => {
    if (!userId || !currentWorkout) return;
    const trimmed = String(newWorkoutName || '').trim();
    if (!trimmed) {
      alert('Unesite novo ime treninga.');
      return;
    }
    if (trimmed === currentWorkout) {
      alert('Novo ime mora biti različito od postojećeg.');
      return;
    }
    try {
      // Optional: prevent name conflict
      if (userId) {
        const names = await getWorkouts(userId);
        if (names && names.includes(trimmed)) {
          const proceed = window.confirm('Trening sa tim imenom već postoji. Želite li ipak nastaviti i kreirati još jedan sa istim imenom?');
          if (!proceed) return;
        }
      }

      const res = await duplicateWorkout(userId, currentWorkout, trimmed);
      if (res && res.created >= 0) {
        setCurrentWorkout(trimmed);
        const refreshed = await getWorkoutExercises(userId, trimmed);
        setWorkoutExercises(refreshed);
        setShowDuplicateWorkoutModal(false);
        alert(`Trening je dupliran kao "${trimmed}" (${res.created} stavki).`);
      }
    } catch (e) {
      console.error('Error duplicating workout:', e);
      alert('Neuspjelo dupliranje treninga. Pokušajte ponovo.');
    }
  };

  const handleStartWorkout = () => {
    if (currentWorkout && workoutExercises.length > 0) {
      navigate('/workout', {
        state: { exercises: workoutExercises, workoutName: currentWorkout }
      })
    } else {
      alert('Please select a workout with exercises first')
    }
  }

  const toggleViewMode = () =>
    setViewMode(viewMode === 'grid' ? 'list' : 'grid')

  /* =========================
     REPLACE flow
     ========================= */
  const handleReplaceExercise = (exerciseId) => {
    const ex = workoutExercises.find(e => e.$id === exerciseId)

    setEditFormData({
      reps: ex?.reps || '',
      time: ex?.time || '',
      load: ex?.load || '',
      equipment: ex?.equipment || '',
      notes: ex?.notes || ''
    })

    setShowEditModal(false)
    setEditingExerciseId(null)
    setReplacingExerciseId(exerciseId)
  }

  const handleConfirmReplace = async (newExercise, details) => {
    try {
      await updateWorkoutExercise(replacingExerciseId, {
        ...details,
        exerciseTitle: newExercise.title,
        athlete: newExercise.athlete,
        athletesSport: newExercise.athletesSports,
        videoURL: newExercise.videoURL || null,
        videoURL_360p: newExercise.videoURL_360p || null,
        poster: newExercise.poster || null,
        folderId: newExercise.folderId || ''
      })

      setWorkoutExercises(workoutExercises.map(ex =>
        ex.$id === replacingExerciseId
          ? {
              ...ex,
              exerciseTitle: newExercise.title,
              athlete: newExercise.athlete,
              athletesSport: newExercise.athletesSports,
              videoURL: newExercise.videoURL || null,
              videoURL_360p: newExercise.videoURL_360p || null,
              poster: newExercise.poster || null,
              folderId: newExercise.folderId || '',
              reps: details.reps ?? ex.reps,
              time: details.time ?? ex.time,
              load: details.load ?? ex.load,
              equipment: details.equipment ?? ex.equipment,
              notes: details.notes ?? ex.notes
            }
          : ex
      ))

      setEditingExerciseId(null)
      setEditFormData({
        reps: '',
        time: '',
        load: '',
        equipment: '',
        notes: ''
      })

      setReplacingExerciseId(null)
    } catch (error) {
      console.error("Error replacing exercise:", error)
      alert("Failed to replace exercise. Please try again.")
    }
  }

  /* =========================
     DUPLICATE (with placement choice)
     ========================= */
  const handleDuplicateClick = (exerciseId) => {
    setDuplicatingExerciseId(exerciseId)
    setShowDuplicateModal(true)
  }

  const confirmDuplicateAfter = async () => {
    if (!duplicatingExerciseId || !currentWorkout || !userId) return
    try {
      await duplicateWorkoutExercise(userId, currentWorkout, duplicatingExerciseId)
      const refreshed = await getWorkoutExercises(userId, currentWorkout)
      setWorkoutExercises(refreshed)
      // optional toast
    } catch (error) {
      console.error('Error duplicating exercise after:', error)
      alert('Neuspjelo dupliranje vježbe odmah poslije izabrane. Pokušajte ponovo.')
    } finally {
      setShowDuplicateModal(false)
      setDuplicatingExerciseId(null)
    }
  }

  const confirmDuplicateToEnd = async () => {
    if (!duplicatingExerciseId || !currentWorkout || !userId) return
    try {
      await duplicateWorkoutExerciseToEnd(userId, currentWorkout, duplicatingExerciseId)
      const refreshed = await getWorkoutExercises(userId, currentWorkout)
      setWorkoutExercises(refreshed)
    } catch (error) {
      console.error('Error duplicating exercise to end:', error)
      alert('Neuspjelo dupliranje vježbe na kraj liste. Pokušajte ponovo.')
    } finally {
      setShowDuplicateModal(false)
      setDuplicatingExerciseId(null)
    }
  }

  const cancelDuplicate = () => {
    setShowDuplicateModal(false)
    setDuplicatingExerciseId(null)
  }

  /* =========================
     REST between exercises
     ========================= */
  const handleApplyRestsBetween = async () => {
    if (!currentWorkout || !userId) return;
    try {
      await setRestsBetweenExercises(userId, currentWorkout, restSeconds)
      const refreshed = await getWorkoutExercises(userId, currentWorkout)
      setWorkoutExercises(refreshed)
      alert(`Pauza od ${restSeconds}s je dodana između svih vježbi.`)
    } catch (error) {
      console.error('Error setting rests between exercises:', error)
      alert('Neuspjelo dodavanje pauze između vježbi. Pokušajte ponovo.')
    }
  }

  const handleRemoveRests = async () => {
    if (!currentWorkout || !userId) return;
    try {
      await setRestsBetweenExercises(userId, currentWorkout, 0)
      const refreshed = await getWorkoutExercises(userId, currentWorkout)
      setWorkoutExercises(refreshed)
      alert('Sve pauze su uklonjene iz ovog treninga.')
    } catch (error) {
      console.error('Error removing rests:', error)
      alert('Neuspjelo uklanjanje pauza. Pokušajte ponovo.')
    }
  }

  /* =========================
     Drag & drop reorder
     ========================= */
  const handleDragStart = (e, index) =>
    e.dataTransfer.setData('text/plain', index)

  const handleDragOver = (e) => e.preventDefault()

  const handleDrop = async (e, targetIndex) => {
    e.preventDefault()
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'))
    if (sourceIndex === targetIndex) return

    const updatedExercises = [...workoutExercises]
    const [draggedItem] = updatedExercises.splice(sourceIndex, 1)
    updatedExercises.splice(targetIndex, 0, draggedItem)
    setWorkoutExercises(updatedExercises)

    try {
      const exerciseIds = updatedExercises.map(ex => ex.$id)
      await updateExerciseOrder(userId, currentWorkout, exerciseIds)
    } catch (error) {
      console.error('Error updating exercise order:', error)
      setWorkoutExercises(workoutExercises)
    }
  }

  /* =========================
     DELETE
     ========================= */
  const handleDeleteExercise = async (exerciseId) => {
    if (window.confirm('Are you sure you want to delete this exercise?')) {
      try {
        await deleteWorkoutExercise(exerciseId)
        setWorkoutExercises(workoutExercises.filter(ex => ex.$id !== exerciseId))
      } catch (error) {
        console.error('Error deleting exercise:', error)
        alert('Failed to delete exercise. Please try again.')
      }
    }
  }

  /* =========================
     EDIT (modal)
     ========================= */
  const handleEditExercise = (exercise) => {
    setEditingExerciseId(exercise.$id)
    setEditFormData({
      reps: exercise.reps || '',
      time: exercise.time || '',
      load: exercise.load || '',
      equipment: exercise.equipment || '',
      notes: exercise.notes || ''
    })
    setShowEditModal(true)
  }

  const handleEditFormChange = (e) => {
    const { name, value } = e.target
    setEditFormData({ ...editFormData, [name]: value })
  }

  const handleSaveEdit = async () => {
    try {
      await updateWorkoutExercise(editingExerciseId, editFormData)

      setWorkoutExercises(workoutExercises.map(ex =>
        ex.$id === editingExerciseId ? { ...ex, ...editFormData } : ex
      ))

      setShowEditModal(false)
      setEditingExerciseId(null)
      setEditFormData({
        reps: '',
        time: '',
        load: '',
        equipment: '',
        notes: ''
      })
    } catch (error) {
      console.error('Error updating exercise:', error)
      alert('Failed to update exercise. Please try again.')
    }
  }

  const handleCancelEdit = () => {
    setShowEditModal(false)
    setEditingExerciseId(null)
    setEditFormData({ reps: '', time: '', load: '', equipment: '', notes: '' })
  }

  const breakpointColumnsObj = { default: 5, 1200: 4, 900: 3, 600: 2 }

  const currentEditingTitle = editingExerciseId
    ? (workoutExercises.find(ex => ex.$id === editingExerciseId)?.exerciseTitle || '')
    : ''

  return (
    <div className="workout-creator-container">
      <div className={`main-content ${replacingExerciseId ? 'blur' : ''}`}>
        <WorkoutCreatorCard onWorkoutSelect={handleWorkoutSelect} />

        {currentWorkout && workoutExercises.length > 0 && (
          <div className="workout-exercises-container">
            <WorkoutHeader
              currentWorkout={currentWorkout}
              viewMode={viewMode}
              onToggleView={toggleViewMode}
              onStartWorkout={handleStartWorkout}
              durationText={formatDuration(estimatedDuration)}
              onDuplicateWorkout={openDuplicateWorkout}
            />

            {/* Rest controls */}
            <div className="rest-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0 20px' }}>
              <label htmlFor="rest-seconds">Pauza (sekunde):</label>
              <input
                id="rest-seconds"
                type="number"
                min="0"
                value={restSeconds}
                onChange={(e) => setRestSeconds(parseInt(e.target.value || '0', 10))}
                style={{ width: '90px' }}
              />
              <button onClick={handleApplyRestsBetween} className="apply-rests-button">
                Dodaj pauzu između vježbi
              </button>
              <button onClick={handleRemoveRests} className="remove-rests-button" style={{ marginLeft: '6px' }}>
                Ukloni sve pauze
              </button>
            </div>

            {viewMode === 'grid' ? (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
                {workoutExercises.map((exercise) => (
                  <WorkoutExerciseCard
                    key={exercise.$id}
                    exercise={exercise}
                    onEdit={handleEditExercise}
                    onDelete={handleDeleteExercise}
                    onDuplicate={handleDuplicateClick}

                    editingExercise={null}
                    editFormData={editFormData}
                    onEditFormChange={handleEditFormChange}
                    onSaveEdit={handleSaveEdit}
                    onCancelEdit={handleCancelEdit}

                    onReplace={handleReplaceExercise}
                  />
                ))}
              </Masonry>
            ) : (
              <div className="workout-list-view">
                <ul>
                  {workoutExercises.map((exercise, index) => (
                    <ExerciseItem
                      key={exercise.$id}
                      exercise={exercise}
                      index={index}

                      editingExercise={null}
                      editFormData={editFormData}

                      onEdit={handleEditExercise}
                      onDelete={handleDeleteExercise}
                      onDuplicate={handleDuplicateClick}

                      onEditFormChange={handleEditFormChange}
                      onSaveEdit={handleSaveEdit}
                      onCancelEdit={handleCancelEdit}

                      handleDragStart={handleDragStart}
                      handleDragOver={handleDragOver}
                      handleDrop={handleDrop}

                      onReplace={handleReplaceExercise}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="workout-creator-exercises">
          <h2>Add Exercises to Workout</h2>
          <WorkoutCreatorExercises
            currentWorkout={currentWorkout}
            onExerciseAdded={(newEx) => setWorkoutExercises(prev => [...prev, newEx])}
          />
        </div>
      </div>

      {/* Replace overlay */}
      {replacingExerciseId && (
        <div className="replace-overlay">
          <div className="replace-container">
            <WorkoutReplaceExercises
              currentWorkout={currentWorkout}
              onReplace={handleConfirmReplace}
              onCancel={() => setReplacingExerciseId(null)}
            />
          </div>
        </div>
      )}

      {/* Edit modal */}
      <ExerciseEditModal
        isOpen={showEditModal}
        onClose={handleCancelEdit}
        editFormData={editFormData}
        onEditFormChange={handleEditFormChange}
        onSaveEdit={handleSaveEdit}
        onReplaceClick={
          editingExerciseId
            ? () => handleReplaceExercise(editingExerciseId)
            : undefined
        }
        exerciseTitle={currentEditingTitle}
      />

      {/* Duplicate choice modal */}
      {showDuplicateModal && (
        <div className="modal-overlay" onClick={cancelDuplicate}>
          <div
            className="modal-content workout-details-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Gdje postaviti dupliranu vježbu?</h3>
            <p style={{ marginTop: '6px', color: '#666' }}>
              Izaberite poziciju nove kopije u okviru ovog treninga.
            </p>
            <div className="modal-actions" style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              <button className="save-button" onClick={confirmDuplicateAfter}>
                Poslije ove
              </button>
              <button className="replace-button" onClick={confirmDuplicateToEnd}>
                Na kraj
              </button>
              <button className="cancel-button" onClick={cancelDuplicate}>
                Otkaži
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Duplicate WORKOUT modal */}
      {showDuplicateWorkoutModal && (
        <div className="modal-overlay" onClick={cancelDuplicateWorkout}>
          <div
            className="modal-content workout-details-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Dupliraj trening</h3>
            <p style={{ marginTop: '6px', color: '#666' }}>
              Unesite novo ime za kopiju treninga "{currentWorkout}".
            </p>
            <div className="form-group" style={{ marginTop: '10px' }}>
              <label>Novo ime:</label>
              <input
                type="text"
                value={newWorkoutName}
                onChange={(e) => setNewWorkoutName(e.target.value)}
                placeholder={`${currentWorkout} Copy`}
                style={{ width: '100%' }}
              />
            </div>
            <div className="modal-actions" style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              <button className="save-button" onClick={confirmDuplicateWorkout}>
                Dupliraj
              </button>
              <button className="cancel-button" onClick={cancelDuplicateWorkout}>
                Otkaži
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkoutCreator