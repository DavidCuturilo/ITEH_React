import React from 'react'
import { Button } from './Button'
import './Footer.css'
// import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                Subscribe to our newsletter to get offers by exclusive prices
                </p>

                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder="Enter e-mail:"
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Footer;