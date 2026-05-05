import React, { useRef, useEffect, useState } from 'react';

const MediaCard = ({ media, onClick }) => {
    const videoRef = useRef(null);
    const [canPlay, setCanPlay] = useState(false);
    const [hovered, setHovered] = useState(false);

    const isVideo = media && typeof media === 'object' && media.videoURL_360p;

    const handleMouseEnter = () => {
        setHovered(true);
        if (isVideo && videoRef.current) {
            videoRef.current.controls = true;
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (isVideo && videoRef.current) {
            videoRef.current.controls = false;
        }
    };

    const handleCanPlay = () => {
        setCanPlay(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMediaError = () => {
        console.log('Neispravan media URL:', media);
    };

    return (
        <div
            className="media-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {isVideo ? (
                <video
                    ref={videoRef}
                    className="video-element"
                    muted
                    loop
                    preload="auto"
                    poster={media.poster}
                    src={media.videoURL_360p}
                    onCanPlayThrough={handleCanPlay}
                    onError={handleMediaError}
                >
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img
                    src={media}
                    alt="Athlete media"
                    className="image-element"
                    loading="lazy"
                    onError={handleMediaError}
                />
            )}
        </div>
    );
};

export default MediaCard;