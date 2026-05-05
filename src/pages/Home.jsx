import React, { useEffect, useState } from 'react';

const Home = () => {
  const [index, setIndex] = useState(0);

  const words = [
    { id: 1, title: 'JUMP', image: 'NoahLyles_jump.jpg', color: '#FF3B3B' },
    { id: 2, title: 'LOOK', image: 'DavidOliver.jpg', color: '#3B9EFF' },
    { id: 3, title: 'FEEL', image: 'NoahLyles_jump.jpg', color: '#3BFF8F' },
    { id: 4, title: 'MOVE', image: 'Jordan.jpg', color: '#FFD43B' },
    { id: 5, title: 'RUN', image: 'Run.jpg', color: '#8F3BFF' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='hero'>
      <div
        className='hero__background'
        style={{
          
          backgroundImage: `url(/images/${words[index].image})`,

        }}
      ></div>
      <div>IF YOU WANT TO</div>
      <div
        className='slide'
        style={{ color: words[index].color }}
      >
        {words[index].title}
      </div>
      <div>LIKE ATHLETE</div>
      <div>YOU NEED TO TRAIN</div>
      <div className='like__athlete'>LIKE ATHLETE</div>
    </div>
  );
};

export default Home;