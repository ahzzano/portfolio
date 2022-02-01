import { useState } from 'react';
import './App.css';

function About() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>About Us</h2>
      <p class="information">
      Nadeko is a young girl with dark brown hair and chocolate brown eyes. She is 153 cm(5'0") and her weight is around 38 kg. During the times when she was still cursed by the jagirinawa, her outfit consisted of a waist pouch, an orange newsboy cap, a pink blouse, an orange jacket and a pair of baggy denims — all of which were designed to hide the scars that covered her body. She also always casts her eyes downward, with long fringes covering her eyes. It can be assumed that her newsboy cap represents the "snake" that cursed her, as its shape resembles a snake's head.

      She later changes her style to a more comfortable set of clothes after being relieved of the curse, and she shows a preference to wearing skirts.

      Later in the series, she cuts her hair short.
      </p>

    </div>
  )
}

function Pricing() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Price</h2>
      <p class="information">
        We are worth 10 vbucks
      </p>
    </div>
  )
}

function Commission() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Commission</h2>
      <p class="information">
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
        <div class="main-card-component">
          {currentComponent}
        </div>

        <div class="main-card-buttons">
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
