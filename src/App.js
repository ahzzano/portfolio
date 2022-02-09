import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import ContactForm from './ContactForm';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import StaffProfile from './StaffProfile';
import { useSpring, animated, useTransition, useChain, useSpringRef } from 'react-spring';

function About() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>About Us</h2>
      <p class="information">
        We make streamer essentials such as 
        - alert boxes
        - stinger transitions
      </p>

      <StaffProfile image="https://nadeko.bot/static/media/nadeko-top.ad6cc06a.png" profileName="ahzzan" roles={"Programmer"}/>

      <StaffProfile image="https://i.pinimg.com/736x/b9/30/83/b93083bb28cd5fefc1353c04f59cec3e.jpg" profileName="ayscrim" roles={"Editor"}/>
    </div>
  )
}

function Pricing() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Price</h2>
      <p class="information">
        $10 - Basic Package
        $20 - Advanced Package
        $30 - Ultimate Package
      </p>
    </div>
  )
}

function Commission(props) {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Commission</h2>
      <p class="information">
        We are currently open for commisions
      </p>
      <div style={{
        display: 'grid',
        placeContent: 'center',
        border: 'none'
      }}>
        <button onClick={props.goToContacts} class="commission-card-button">Contact Us Now</button>
      </div>
    </div>
  )
}

function IntroductionCard(props) {
  const [page, setPage] = useState('about')

  const textFadeRef = useSpringRef()
  const textFadeTransition = useTransition(page, {
    from: { opacity: 0 },
    enter: { opacity: 1, display: 'block' },
    leave: { opacity: 0, display: 'none' }
  })
  
  const heightRef = useSpringRef()
  const heightAnimation = useSpring({
    to: [
      { maxHeight: '1%', overflow: 'hidden' },
      { maxHeight: '100%', overflow: 'hidden' }
    ]
  })


  let currentComponent

  switch(page) {
    case 'about':
      currentComponent = <About/>
      break
    case 'pricing':
      currentComponent = <Pricing/>
      break
    case 'commission':
      currentComponent = <Commission goToContacts={() => {props.toContact()}}/>
      break
  }

  return (
    <animated.div class="main-card" style={heightAnimation}>
      <animated.div class="main-card-content">
        {
          textFadeTransition((styles, item) => (
            <animated.div class="main-card-component" style={styles}>
              {currentComponent}
            </animated.div>
          ))
        }

        <div class="main-card-buttons">
          <button onClick={() => {setPage('about')}}>About</button>
          <button onClick={() => {setPage('pricing')}}>Pricing</button>
          <button onClick={() => {setPage('commission')}}>Commission</button>
        </div>
      </animated.div>
    </animated.div>
  )
}

function App() {
  const parallaxRef = useRef(null)

  const moveToPage = (to) => {
    if(parallaxRef.current) {
      parallaxRef.current.scrollTo(to)
    }
  }

  const fadeIn = useSpring({
    to: {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    from: {
      opacity: 0,
      transform: 'translateY(120px)'
    },    
  })

  return (
    <div>
      <Parallax pages={3} style={{ top: '0', left: '0', backgroundColor: "#1c2321"}} ref={parallaxRef} >
        <ParallaxLayer offset={0}>

          <header class="front-page" onClick={() => {moveToPage(1)}}>
            <animated.div class="intro-card" style={fadeIn}>
              <h1>ahzzan and ayscrim</h1>
              <p>
                We make streamer essentials
              </p>
            </animated.div>
          </header>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} class="content">
          <IntroductionCard toContact={() => {moveToPage(2)}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{backgroundColor:'#5E6572'}}/>

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
