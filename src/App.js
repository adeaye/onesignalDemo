"use client"
import React, { useEffect } from 'react';
import './App.css';
import runOneSignal from './utils/onesignal';
import eruda from 'eruda';

const App = () => {
  useEffect(() => {
    runOneSignal();
    eruda.init()
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Food Restaurant</h1>
        <p>Delicious food made with love</p>
      </header>
      <section className="Food-section">
        <h2>Our Menu</h2>
        <div className="Food-list">
          <div className="Food-item">
            <img src="https://picsum.photos/200/300" alt="Food 1" />
            <h3>Food Item 1</h3>
            <p>Description of food item 1</p>
          </div>
          <div className="Food-item">
            <img src="https://picsum.photos/200/300" alt="Food 2" />
            <h3>Food Item 2</h3>
            <p>Description of food item 2</p>
          </div>
          <div className="Food-item">
            <img src="https://picsum.photos/200/300" alt="Food 3" />
            <h3>Food Item 3</h3>
            <p>Description of food item 3</p>
          </div>
        </div>
      </section>
      <footer className="Footer">
        <p>© 2023 Food Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
