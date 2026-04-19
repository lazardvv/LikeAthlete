import Masonry from 'react-masonry-css';

const AthleteVideos = ({ videos }) => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 2,
    700: 1,
  };

  return (
    <div>
      <h2>Videos</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {videos.map((url, index) => (
          <div key={index} className="video-wrapper">
            <video
              src={url}
              controls
              muted
              preload="metadata"
              style={{ width: '100%', borderRadius: '8px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default AthleteVideos;