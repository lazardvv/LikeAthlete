import React, { useRef, useState, useEffect } from 'react'
import VideoPlayer from './VideoPlayer'
import QualityControls from './QualityControls'
import ExerciseInfo from './ExerciseInfo'

const WorkoutExerciseCard = ({ 
  exercise, 
  onEdit, 
  onDelete,
  onDuplicate,   // ⬅️ NOVO: prosleđujemo dalje ka QualityControls

  // Zbog kompatibilnosti — ali se više ne koriste
  editingExercise, 
  editFormData, 
  onEditFormChange, 
  onSaveEdit, 
  onCancelEdit,

  onReplace
}) => {

  const videoRef = useRef(null)
  const loadedVideos = useRef({})
  const [quality, setQuality] = useState('360p')
  const [hovered, setHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPosterLoaded, setIsPosterLoaded] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
    if (videoRef.current) videoRef.current.controls = true
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) videoRef.current.controls = false
  }

  const handleQualityChange = (e) => {
    const selectedQuality = e.target.value
    setQuality(selectedQuality)
    if (videoRef.current) {
      const newSrc = selectedQuality === '360p' ? exercise.videoURL_360p : exercise.videoURL
      if (loadedVideos.current[newSrc]) {
        videoRef.current.src = newSrc
      } else {
        videoRef.current.src = newSrc
        videoRef.current.load()
        loadedVideos.current[newSrc] = true
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.src = exercise.videoURL_360p
      loadedVideos.current[exercise.videoURL_360p] = true
    }
  }, [isVisible, exercise.videoURL_360p])

  return (
    <div
      className="exercise-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => { setHovered(true); setMenuOpen(true); }}
    >
      <button
        type="button"
        className="quality-menu-toggle"
        aria-label="Otvori meni za kontrole"
        onClick={() => setMenuOpen((v) => !v)}
      >
        ⋮
      </button>

      <VideoPlayer 
        videoRef={videoRef} 
        poster={exercise.poster} 
        isPosterLoaded={isPosterLoaded} 
        setIsPosterLoaded={setIsPosterLoaded} 
      />

      <QualityControls 
        exercise={exercise} 
        hovered={hovered} 
        open={menuOpen}
        quality={quality} 
        onQualityChange={handleQualityChange}

        // Parent već wrapuje funkcije – ovdje ih pozivamo direktno
        onEdit={() => onEdit && onEdit(exercise)}
        onDelete={() => onDelete && onDelete(exercise.$id)}
        onDuplicate={() => onDuplicate && onDuplicate(exercise.$id)}
      />

      <div className="exercise-info">
        <ExerciseInfo exercise={exercise} />
      </div>
    </div>
  )
}

export default WorkoutExerciseCard