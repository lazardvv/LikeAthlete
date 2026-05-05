import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import athletes from '../data/athletes';
import MediaCard from '../components/MediaCard'; // nova komponenta




const MediaMasonryShower = ({ athlete }) => {
    const [visibleCount, setVisibleCount] = useState(10);
    const loaderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleCount((prev) => prev + 10);
            }
        });
        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, []);

    const breakpointColumnsObj = {
        default: 5,
        1200: 4,
        900: 3,
        600: 2,
    };

    
const athleteMedia = athlete?.media || [];
  const visibleMedia = athleteMedia.slice(0, visibleCount);


    return (
        <div className='athlete__media'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {visibleMedia.map((media, index) => (
                    <MediaCard key={index} media={media} />
                ))}
            </Masonry>
            <div ref={loaderRef} style={{ height: '20px' }} />
        </div>
    );
};

export default MediaMasonryShower;