import React, { useState } from 'react';
import athletes from '../data/athletes';
import { FaInstagram } from 'react-icons/fa';
import { SiWikipedia } from 'react-icons/si';

const AthleteInfo = ({ athlete }) => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  return (
    <div className="athlete__info__container">
      <div className="athlete__left">
        <div className="athlete__photo">
          {/* Skeleton loader */}
          {!isPhotoLoaded && (
            <div className="profile-photo-skeleton" />
          )}

          {/* Hidden image to detect load */}
          <img
            src={athlete.profilePhoto}
            alt={`${athlete.firstName} ${athlete.lastName}`}
            className="profile__photo__img"
            style={{ display: isPhotoLoaded ? 'block' : 'none' }}
            onLoad={() => setIsPhotoLoaded(true)}
          />

          <div className="athlete__social">
            <div className="athlete__instagram">
              <a
                href={athlete.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  width={24}
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="athlete__wiki">
              <a
                href={athlete.wikipediaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg"
                  width={24}
                  alt="Wikipedia"
                />
              </a>
            </div>
          </div>

          <div className="athlete__photoandsocial__name">
            {athlete.firstName.toUpperCase()} {athlete.lastName.toUpperCase()}
          </div>
          <div className="athlete__photoandsocial__sport">
            {athlete.athletesSport}
          </div>
        </div>
      </div>

      <div className="athlete__right">
        <div className="athlete__firstandlastname">
          <div className="athlete__firstname">
            {athlete.firstName.toUpperCase()}
          </div>
          <div className="athlete__firstname">
            {athlete.lastName.toUpperCase()}
          </div>
        </div>
        <div className="athlete__info">
          <ul>
            {athlete.info.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AthleteInfo;
