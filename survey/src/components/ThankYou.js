// src/components/ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Survey.css';

const ThankYou = () => {
  return (
    <div className="container thank-you">
      <h1>Grazie per aver completato il questionario!</h1>
      <p>La tua partecipazione è molto apprezzata.</p>
      <Link to="/">
        <button>Vuoi completare un altro questionario?</button>
      </Link>
    </div>
  );
};

export default ThankYou;
