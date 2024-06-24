import React, { useState } from 'react';
import './animalPage.css';

const AnimalPage = () => {
  // Define state to manage the text values for each card
  const [card1Text, setCard1Text] = useState({
    nickname: 'Giraffe',
    fullname: 'Girrafa',
    class: 'Mamamalia'
  });

  const [card2Text, setCard2Text] = useState({
    nickname: 'Gorilla',
    fullname: 'Gorilla',
    class: 'Mamamalia'
  });

  const [card3Text, setCard3Text] = useState({
    nickname: 'Beaver',
    fullname: 'Castor',
    class: 'Mammalia'
  });

  return (
    <div className="animal-page">
      <div className="card-container c1">
        <div className="image">
          <img className="profile-picture" src="" alt="Profile 1" />
        </div>
        <div className="card-details">
          <p className="nickname">{card1Text.nickname}</p>
          <p className="fullname">{card1Text.fullname}</p>
          <p className="class">{card1Text.class}</p>
        </div>
      </div>
      <div className="card-container c2">
        <div className="image">
          <img className="profile-picture" src="" alt="Profile 2" />
        </div>
        <div className="card-details">
          <p className="nickname">{card2Text.nickname}</p>
          <p className="fullname">{card2Text.fullname}</p>
          <p className="class">{card2Text.class}</p>
        </div>
      </div>
      <div className="card-container c3">
        <div className="image">
          <img className="profile-picture" src="" alt="Profile 3" />
        </div>
        <div className="card-details">
          <p className="nickname">{card3Text.nickname}</p>
          <p className="fullname">{card3Text.fullname}</p>
          <p className="class">{card3Text.class}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimalPage;
