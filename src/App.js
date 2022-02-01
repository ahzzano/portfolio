import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import ContactForm from './ContactForm';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
  const parallaxRef = useRef(null)

  const moveToPage = (to) => {
    if(parallaxRef.current) {
      parallaxRef.current.scrollTo(to)
    }
  }

  

  return (
    <div>
      <Parallax pages={3} style={{ top: '0', left: '0', backgroundColor: "#1c2321"}} ref={parallaxRef} >
        <ParallaxLayer offset={0}>
          <header class="front-page" onClick={() => {moveToPage(1)}}>
            <div class="intro-card">
              <h1>ahzzan and ayscrim</h1>
              <p>
                We make streamer essentials
              </p>
            </div>
          </header>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} class="content">
          <IntroductionCard/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{backgroundColor:'darkslategrey'}}/>

        <ParallaxLayer offset={2} speed={1}>

            <div class="footer-content">
              <h1>Contact us Today</h1>
              <ContactForm/>
            </div>

        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
