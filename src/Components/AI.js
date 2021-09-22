import React from 'react';
import '../App.css';
import { Button } from '../Components/button';
import '../CSS/AI.css';

function AI() {
  return (
    <div className='hero-container'>
      <video src='https://www.youtube.com/watch?v=8zsSxrlIR_c&t=17s' autoPlay loop muted />
      <h1>Neuroanatomy</h1>
      <p>What the Human Brain is like</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default AI;

