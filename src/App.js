import { useState } from 'react';
import './App.css';

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are among us
      </p>

    </div>
  )
}

function Pricing() {
  return (
    <div>
      <h2>Price</h2>
      <p>
        We are worth 10 vbucks
      </p>
    </div>
  )
}

function Commission() {
  return (
    <div>
      <h2>Commission</h2>
      <p>
        We are currently open
      </p>
    </div>
  )
}

function IntroductionCard() {
  const [page, setPage] = useState('about')

  let currentComponent

  switch(page) {
    case 'about':
      currentComponent = <About/>
      break
    case 'pricing':
      currentComponent = <Pricing/>
      break
    case 'commission':
      currentComponent = <Commission/>
      break
  }

  return (
    <div class="main-card">
      <div class="main-card-content">
        <div>
          {currentComponent}
        </div>

        <div>
          <button onClick={() => {setPage('about')}}>About</button>
          <button onClick={() => {setPage('pricing')}}>Pricing</button>
          <button onClick={() => {setPage('commission')}}>Commission</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <header class="front-page">
        <div class="intro-card">
          <h1>ahzzan and ayscrim</h1>
          <p>
            We make streamer essentials
          </p>
        </div>
      </header>

      <div class="content">
        <IntroductionCard/>
      </div>

      <footer class="contact">
        <div class="footer-content">
          <h1>Contact us Today</h1>
          <p>
            genis_esports@ph.com
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
