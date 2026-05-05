import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import athletes from '../data/athletes';
import MediaCard from '../components/MediaCard';

const ExploreAthletes = () => {
    const [visibleCount, setVisibleCount] = useState(15);
    const loaderRef = useRef(null);
    const navigate = useNavigate();

    const allMedia = useMemo(() => {
        return athletes.flatMap((athlete) =>
            athlete.media.map((media) => ({
                media,
                athleteSlug: athlete.slug,
            }))
        ).sort(() => Math.random() - 0.5);
    }, []);

    const visibleMedia = allMedia.slice(0, visibleCount);

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

    const handleMediaClick = (slug) => {
        navigate(`/athlete/${slug}`);
    };

    return (
        <div className="explore__media">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {visibleMedia.map(({ media, athleteSlug }, index) => (
                    <MediaCard
                        key={index}
                        media={media}
                        onClick={() => handleMediaClick(athleteSlug)}
                    />
                ))}
            </Masonry>
            <div ref={loaderRef} style={{ height: '20px' }} />
        </div>
    );
};

export default ExploreAthletes;