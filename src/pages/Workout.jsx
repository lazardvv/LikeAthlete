import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// CSS for the circular timer and timeline
const styles = {
  timelineContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0',
    position: 'relative',
    padding: '0 10px',
  },
  timelineLine: {
    position: 'absolute',
    height: '4px',
    backgroundColor: '#e0e0e0',
    top: '50%',
    left: '0',
    right: '0',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  timelineProgress: {
    position: 'absolute',
    height: '4px',
    backgroundColor: '#4CAF50',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    zIndex: 2,
    transition: 'width 0.3s ease',
  },
  timelinePoint: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    position: 'relative',
    transition: 'background-color 0.3s ease',
  },
  timelinePointActive: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  timelinePointCompleted: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  timelineLabel: {
    position: 'absolute',
    top: '25px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    whiteSpace: 'nowrap',
  },
  circularTimer: {
    position: 'relative',
    width: '120px',
    height: '120px',
    margin: '20px auto',
  },
  circularTimerSvg: {
    transform: 'rotate(-90deg)',
    width: '100%',
    height: '100%',
  },
  circularTimerBackground: {
    fill: 'none',
    stroke: '#e0e0e0',
    strokeWidth: '8',
  },
  circularTimerProgress: {
    fill: 'none',
    stroke: '#4CAF50',
    strokeWidth: '8',
    strokeLinecap: 'round',
    transition: 'stroke-dashoffset 1s linear',
  },
  circularTimerText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

const Workout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { exercises, workoutName } = location.state || { exercises: [], workoutName: '' };

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [restTimeLeft, setRestTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [restTimerActive, setRestTimerActive] = useState(true);
  const currentVideoRef = useRef(null);
  const audioContextRef = useRef(null);
  const advanceLockRef = useRef(false);
  const [restStarted, setRestStarted] = useState(false);
  const restInitialRef = useRef(0);
  const [previewExercise, setPreviewExercise] = useState(null);

  const playBeep = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.frequency.setValueAtTime(800, context.currentTime); // Frequency in Hz
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.3);
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Or 'sr-RS' for Serbian, but since app is in English, keep en-US
      utterance.rate = 1;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const currentExercise = exercises[currentExerciseIndex];

  const isRestExercise = (ex) => {
    if (!ex) return false;
    const title = String(ex.exerciseTitle || ex.title || '').toLowerCase();
    return ex.athlete === 'Rest' || title.includes('rest');
  };

  // Auto-play current video when exercise changes
  useEffect(() => {
    if (!currentExercise) return;

    // If current item is a rest entry, announce resting (with seconds when available)
    if (isRestExercise(currentExercise) || isResting) {
      // compute seconds from currentExercise.time without relying on helper
      let restSeconds = 0;
      try {
        const t = currentExercise.time;
        if (t) {
          const s = String(t);
          if (s.endsWith('s')) restSeconds = parseInt(s.slice(0, -1), 10) || 0;
          else if (s.endsWith('m')) restSeconds = (parseInt(s.slice(0, -1), 10) || 0) * 60;
          else restSeconds = parseInt(s, 10) || 0;
        }
      } catch (e) {
        restSeconds = 0;
      }

      if (restSeconds > 0) speak(`Resting for ${restSeconds} seconds`);
      else speak('Resting');
      return;
    }

    if (currentVideoRef.current && !isResting) {
      currentVideoRef.current.play().catch(() => {
        // Ignore play errors (e.g., user interaction required)
      });
      speak(`Start exercise ${currentExerciseIndex + 1}`);
    }
  }, [currentExerciseIndex, isResting]);

  // Handle case when no exercises are passed
  useEffect(() => {
    if (!exercises || exercises.length === 0) {
      navigate('/workoutcreator');
    }
  }, [exercises, navigate]);

  // Set up timer for time-based exercises
  useEffect(() => {
    if (!currentExercise) return;

    const title = String(currentExercise.exerciseTitle || currentExercise.exerciseTitle === 0 ? currentExercise.exerciseTitle : '').toLowerCase();
    const isRestExercise = currentExercise.athlete === 'Rest' || title.includes('rest');

    if (isRestExercise) {
      // Start rest only when the current item is explicitly a rest entry
      const restSeconds = parseTimeToSeconds(currentExercise.time);
      restInitialRef.current = restSeconds || 0;
      setRestTimeLeft(restSeconds || 0);
      setIsResting(true);
      // auto-start only when a positive duration exists
      const shouldAutoStart = !!(restSeconds && restSeconds > 0);
      setRestStarted(shouldAutoStart);
      setRestTimerActive(shouldAutoStart);
      setTimerActive(false);
    } else if (currentExercise.time) {
      // Normal time-based exercise
      const timeInSeconds = parseTimeToSeconds(currentExercise.time);
      setTimeLeft(timeInSeconds);
      setTimerActive(true);
      setIsResting(false);
    } else {
      setTimerActive(false);
      setIsResting(false);
    }
  }, [currentExercise]);

  // Timer countdown effect
  useEffect(() => {
    let timer;

    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          if (newTime <= 10 && newTime > 0) {
            playBeep();
          }
          return newTime;
        });
      }, 1000);
    } else if (timerActive && timeLeft === 0) {
      // Time is up, move to next exercise after rest
      handleExerciseComplete();
    }

    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);

  // Rest timer effect
  useEffect(() => {
    let restTimer;

    // Only count down when rest has been started and timer is active
    if (isResting && restStarted && restTimerActive && restTimeLeft > 0) {
      restTimer = setInterval(() => {
        setRestTimeLeft(prev => {
          const newTime = prev - 1;
          if (newTime <= 10 && newTime > 0) {
            playBeep();
          }
          return newTime;
        });
      }, 1000);
    } else if (isResting && restStarted && restTimeLeft === 0) {
      // Rest is over, move to next exercise (guarded)
      setIsResting(false);
      setRestTimerActive(true);
      if (!advanceLockRef.current) {
        advanceLockRef.current = true;
        setTimeout(() => { advanceLockRef.current = false; }, 800);
        moveToNextExercise();
      }
    }

    return () => clearInterval(restTimer);
  }, [isResting, restTimeLeft, restStarted, restTimerActive]);

  const parseTimeToSeconds = (timeString) => {
    if (!timeString) return 0;

    // Ensure timeString is a string
    const timeStr = String(timeString);

    // Handle formats like "30s" or "1m"
    if (timeStr.endsWith('s')) {
      return parseInt(timeStr.slice(0, -1), 10);
    } else if (timeStr.endsWith('m')) {
      return parseInt(timeStr.slice(0, -1), 10) * 60;
    }

    // Default case, assume seconds
    return parseInt(timeStr, 10) || 0;
  };

  const handleExerciseComplete = () => {
    setTimerActive(false);

    if (advanceLockRef.current) return;
    advanceLockRef.current = true;
    setTimeout(() => { advanceLockRef.current = false; }, 800);

    if (currentExerciseIndex < exercises.length - 1) {
      // Move to next item; if it's a rest entry the effect will start the rest timer
      moveToNextExercise();
    } else {
      // Workout complete
      alert('Workout complete!');
      navigate('/workoutcreator');
    }
  };

  const moveToNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      // Workout complete
      alert('Workout complete!');
      navigate('/workoutcreator');
    }
  };

  const moveToPreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1);
    }
  };

  const previousExercise = exercises[currentExerciseIndex - 1];
  const nextExercise = exercises[currentExerciseIndex + 1];

  if (!currentExercise) {
    return <div>Loading...</div>;
  }

  return (
    <div className="workout-container">
     

      {isResting ? (
        <div className="rest-container" style={{ position: 'relative' }}>
          <h2>Rest</h2>

          {/* Centered Resting indicator */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1200,
            pointerEvents: 'none'
          }}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              padding: '14px 22px',
              borderRadius: '10px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#333' }}>Resting</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>{restTimeLeft > 0 ? `${restTimeLeft}s` : ''}</div>
            </div>
          </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between' }}>
              {/* Left: Rest timer + pause or start */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {restStarted ? (
                  <>
                    <div style={{ ...styles.circularTimer, margin: 0 }}>
                      <svg style={styles.circularTimerSvg}>
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          style={styles.circularTimerBackground}
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          style={{
                            ...styles.circularTimerProgress,
                            strokeDasharray: 339.292,
                            strokeDashoffset: 339.292 * (1 - restTimeLeft / (restInitialRef.current || 1))
                          }}
                        />
                      </svg>
                      <div style={styles.circularTimerText}>{restTimeLeft}s</div>
                    </div>

                    <button onClick={() => setRestTimerActive(prev => !prev)} style={{ marginTop: '10px', padding: '6px 10px', borderRadius: '4px', border: 'none', backgroundColor: '#2196F3', color: '#fff', cursor: 'pointer' }}>
                      {restTimerActive ? 'Pause' : 'Resume'}
                    </button>
                  </>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: '20px', marginBottom: '8px' }}>{restTimeLeft > 0 ? `${restTimeLeft}s` : 'No duration set'}</div>
                    {restTimeLeft > 0 ? (
                      <button onClick={() => { setRestStarted(true); setRestTimerActive(true); }} style={{ padding: '8px 12px', borderRadius: '4px', border: 'none', backgroundColor: '#4caf50', color: '#fff', cursor: 'pointer' }}>Start Rest</button>
                    ) : (
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => { setIsResting(false); moveToNextExercise(); }} style={{ padding: '6px 10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px' }}>Skip Rest</button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Middle: message + timeline */}
              <div style={{ flex: 1, padding: '0 20px' }}>
                <h3>Get ready for the next exercise...</h3>
                <div style={styles.timelineContainer}>
                  <div style={{...styles.timelineLine, backgroundColor: '#000'}}></div>
                  <div 
                    style={{
                      ...styles.timelineProgress,
                      backgroundColor: '#000',
                      width: `${((currentExerciseIndex + 0.5) / (exercises.length - 1)) * 100}%`
                    }}
                  ></div>

                  {exercises.map((_, index) => (
                    <div 
                      key={index}
                      style={{
                        ...styles.timelinePoint,
                        backgroundColor: index === currentExerciseIndex ? '#fff' : '#000',
                        border: '2px solid #000',
                        color: index === currentExerciseIndex ? '#000' : '#fff'
                      }}
                    >
                      {index < currentExerciseIndex ? '✓' : ''}
                      <div style={styles.timelineLabel}>
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Next exercise preview */}
              <div style={{ width: '220px', textAlign: 'center' }}>
                {nextExercise ? (
                  <>
                    <h4>Next Up</h4>
                    <img src={nextExercise.poster} alt="next poster" style={{ width: '100%', borderRadius: '6px', objectFit: 'cover' }} />
                    <p style={{ marginTop: '8px' }}>{nextExercise.exerciseTitle}</p>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <button onClick={() => { setIsResting(false); moveToNextExercise(); }} style={{ padding: '6px 10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px' }}>Skip Rest</button>
                      <button onClick={() => setPreviewExercise(nextExercise)} style={{ padding: '6px 10px', backgroundColor: '#607d8b', color: '#fff', border: 'none', borderRadius: '4px' }}>Preview</button>
                    </div>
                  </>
                ) : (
                  <p>No upcoming exercise</p>
                )}
              </div>
            </div>
        </div>
      ) : (
        <div className="exercise-container">
          <h3>{currentExercise.exerciseTitle}</h3>

          {/* Timeline component */}
          <div style={styles.timelineContainer}>
            <div style={styles.timelineLine}></div>
            <div 
              style={{
                ...styles.timelineProgress,
                width: `${(currentExerciseIndex / (exercises.length - 1)) * 100}%`
              }}
            ></div>

            {exercises.map((_, index) => (
              <div 
                key={index}
                style={{
                  ...styles.timelinePoint,
                  ...(index < currentExerciseIndex ? styles.timelinePointCompleted : 
                     index === currentExerciseIndex ? styles.timelinePointActive : {})
                }}
              >
                {index < currentExerciseIndex ? '✓' : ''}
                <div style={styles.timelineLabel}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* 3-column layout for exercises */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
            {/* Previous Exercise */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              {previousExercise ? (
                <>
                        <video
                          className="video-element"
                          muted
                          poster={previousExercise.poster}
                          style={{
                            width: '100%',
                            maxWidth: '300px',
                            maxHeight: '60vh',
                            height: 'auto',
                            objectFit: 'contain',
                            filter: isRestExercise(previousExercise) ? 'none' : 'grayscale(100%)',
                            opacity: isRestExercise(previousExercise) ? 1 : 0.6
                          }}
                        >
                          <source src={previousExercise.videoURL_360p} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                  <p>{previousExercise.exerciseTitle}</p>
                  <button onClick={moveToPreviousExercise} style={{ padding: '5px 10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>← Previous</button>
                </>
              ) : (
                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p>No previous exercise</p>
                </div>
              )}
            </div>

            {/* Current Exercise */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h4>Current</h4>
              <video
                key={currentExerciseIndex}
                ref={currentVideoRef}
                className="video-element"
                muted
                autoPlay
                loop
                controls
                poster={currentExercise.poster}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  maxHeight: '60vh',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              >
                <source src={currentExercise.videoURL_360p} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{currentExercise.exerciseTitle}</p>
            </div>

            {/* Next Exercise */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              {nextExercise ? (
                <>
                  <h4>Next Up</h4>
                  <video
                    className="video-element"
                    muted
                    poster={nextExercise.poster}
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      maxHeight: '60vh',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: isRestExercise(nextExercise) ? 'none' : 'grayscale(100%)',
                      opacity: isRestExercise(nextExercise) ? 1 : 0.6
                    }}
                  >
                    <source src={nextExercise.videoURL_360p} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p>{nextExercise.exerciseTitle}</p>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <button onClick={() => setPreviewExercise(nextExercise)} style={{ padding: '5px 10px', backgroundColor: '#607d8b', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Preview</button>
                    <button onClick={moveToNextExercise} style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Next →</button>
                  </div>
                </>
              ) : (
                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p>Workout Complete</p>
                </div>
              )}
            </div>
          </div>

          <div className="exercise-details" style={{ marginTop: '20px' }}>
            <div style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              {currentExercise.reps && (
                <div style={{ marginBottom: '10px' }}>
                  <strong>Reps:</strong> {currentExercise.reps}
                </div>
              )}

              {currentExercise.time && (
                <div style={{ marginBottom: '10px' }}>
                  <strong>Time:</strong> {formatTime(timeLeft)}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                    {/* Circular countdown timer */}
                    <div style={styles.circularTimer}>
                      <svg style={styles.circularTimerSvg}>
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          style={styles.circularTimerBackground}
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          style={{
                            ...styles.circularTimerProgress,
                            strokeDasharray: 339.292, // 2 * π * 54
                            strokeDashoffset: 339.292 * (1 - timeLeft / parseTimeToSeconds(currentExercise.time))
                          }}
                        />
                      </svg>
                      <div style={styles.circularTimerText}>{timeLeft}s</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <button onClick={() => setTimerActive(prev => !prev)} style={{ padding: '8px 12px', borderRadius: '4px', border: 'none', backgroundColor: '#2196F3', color: '#fff', cursor: 'pointer' }}>
                        {timerActive ? 'Pause' : 'Resume'}
                      </button>
                      <div style={{ color: '#666', fontSize: '14px' }}>{currentExercise.exerciseTitle}</div>
                    </div>
                  </div>
                </div>
              )}

              {currentExercise.load && (
                <div style={{ marginBottom: '10px' }}>
                  <strong>Load:</strong> {currentExercise.load}
                </div>
              )}
              {currentExercise.equipment && (
                <div style={{ marginBottom: '10px' }}>
                  <strong>Equipment:</strong> {currentExercise.equipment}
                </div>
              )}
              {currentExercise.notes && (
                <div style={{ marginBottom: '10px' }}>
                  <strong>Notes:</strong> {currentExercise.notes}
                </div>
              )}
            </div>

            <button 
              className="done-button"
              onClick={handleExerciseComplete}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '15px'
              }}
            >
              {currentExercise.time && timeLeft > 0 ? 'Skip' : 'Next Exercise'}
            </button>
          </div>

          {/* Exercises List */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '20px', color: '#333', fontWeight: '600' }}>Workout Plan</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px'
            }}>
              {exercises.map((exercise, index) => {
                const isCompleted = index < currentExerciseIndex;
                const isCurrent = index === currentExerciseIndex;
                
                return (
                  <div
                    key={index}
                    onClick={() => !isCompleted && setCurrentExerciseIndex(index)}
                    style={{
                      padding: '14px',
                      border: isCurrent ? '2px solid #4CAF50' : '1px solid #ddd',
                      borderRadius: '8px',
                      backgroundColor: isCompleted ? '#f0f0f0' : isCurrent ? '#f0f9f6' : '#fff',
                      cursor: !isCompleted ? 'pointer' : 'default',
                      transition: 'all 0.3s ease',
                      opacity: isCompleted ? 0.7 : 1,
                      boxShadow: isCurrent ? '0 4px 12px rgba(76, 175, 80, 0.2)' : 'none',
                      position: 'relative'
                    }}
                  >
                    {/* Index number */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '12px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: isCompleted ? '#4CAF50' : isCurrent ? '#4CAF50' : '#e0e0e0',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {isCompleted ? '✓' : index + 1}
                    </div>

                    {/* Title */}
                    <div style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: isCompleted ? '#999' : '#333',
                      textDecoration: isCompleted ? 'line-through' : 'none',
                      paddingRight: '30px'
                    }}>
                      {exercise.exerciseTitle || exercise.title}
                    </div>

                    {/* Details */}
                    <div style={{
                      fontSize: '13px',
                      color: isCompleted ? '#aaa' : '#666',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      {exercise.reps && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontWeight: '500' }}>Reps:</span>
                          <span>{exercise.reps}</span>
                        </div>
                      )}
                      {exercise.time && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontWeight: '500' }}>Time:</span>
                          <span>{exercise.time}</span>
                        </div>
                      )}
                      {exercise.load && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontWeight: '500' }}>Load:</span>
                          <span>{exercise.load}</span>
                        </div>
                      )}
                    </div>

                    {/* Current indicator */}
                    {isCurrent && (
                      <div style={{
                        marginTop: '10px',
                        padding: '6px 10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                        Currently Active
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {previewExercise && (
        <div
          onClick={() => setPreviewExercise(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              backgroundColor: '#fff',
              borderRadius: '10px',
              width: 'min(92vw, 720px)',
              maxHeight: '85vh',
              padding: '16px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <button
              aria-label="Close preview"
              onClick={() => setPreviewExercise(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#f0f0f0',
                color: '#333',
                fontSize: '18px',
                fontWeight: 700,
                cursor: 'pointer',
                lineHeight: '36px'
              }}
            >
              ×
            </button>

            <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', textAlign: 'center' }}>
              {previewExercise.exerciseTitle || previewExercise.title}
            </div>

            {previewExercise.videoURL_360p ? (
              <video
                className="video-element"
                controls
                autoPlay
                muted
                loop
                poster={previewExercise.poster}
                style={{
                  width: '100%',
                  maxWidth: '680px',
                  maxHeight: '65vh',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  backgroundColor: '#000'
                }}
              >
                <source src={previewExercise.videoURL_360p} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={previewExercise.poster}
                alt="Exercise preview"
                style={{
                  width: '100%',
                  maxWidth: '680px',
                  maxHeight: '65vh',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  backgroundColor: '#000'
                }}
              />
            )}

            {/* Optional details */}
            <div style={{ marginTop: '12px', color: '#555', fontSize: '14px', textAlign: 'center' }}>
              {previewExercise.reps ? `Reps: ${previewExercise.reps}` : ''}
              {previewExercise.time ? `${previewExercise.reps ? ' • ' : ''}Time: ${previewExercise.time}` : ''}
              {previewExercise.load ? `${(previewExercise.reps || previewExercise.time) ? ' • ' : ''}Load: ${previewExercise.load}` : ''}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Helper function to format time in MM:SS format
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export default Workout;
