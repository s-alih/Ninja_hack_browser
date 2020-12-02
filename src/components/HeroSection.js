import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'> 
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVAENTURE AWAITS</h1>
            <p>WHAT ARE YOU AWAITING FOR ?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn-primary'>
                    WATCH TRAILER <i className='fa fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection 
 