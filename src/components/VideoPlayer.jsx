// VideoPlayer.jsx
import React from 'react'

const VideoPlayer = ({ videoRef, poster, isPosterLoaded, setIsPosterLoaded, autoplay = false, loop = false }) => (
  <>
    <video
      ref={videoRef}
      muted
      preload="metadata"
      poster={poster}
      autoPlay={autoplay}
      loop={loop}
      controls={autoplay}
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
        borderRadius: '4px',
        display: isPosterLoaded ? 'block' : 'none'
      }}
    >
      Your browser does not support the video tag.
    </video>

    <img
      src={poster}
      alt="poster loader"
      style={{ display: 'none' }}
      onLoad={() => setIsPosterLoaded(true)}
    />

    {!isPosterLoaded && (
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          animation: 'pulse 1.5s infinite'
        }}
      />
    )}
  </>
)

export default VideoPlayer
