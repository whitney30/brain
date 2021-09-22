import React from 'react';
import '../CSS/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/organ3.jpg'
              text='The Human Brain'
              label='Neuroanatomy'
              path='/services'
            />
            <CardItem
              src='images/AIbrain2.jpg'
              text='Into The World Of Artificial Intelligence'
              label='Brain Technology'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/AI.JPEG'
              text='Artificial Intelligence'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/brainspinalcord.jpg'
              text='Human Anatomy'
              label='Human anatomy Books'
              path='/products'
            />
            <CardItem
              src='images/mental health.jpg'
              text='How to Heal and Help with Mental Health'
              label='Mental Health'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
