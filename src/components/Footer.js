import React from 'react'
import { Button } from './Button'
import './Footer.css'
// import {Link} from 'react-router-dom'

function Footer({subscribeMail}) {
    // function subscribeMail(){
    //     document.getElementById('subscribe').value = ''
    //     alert("Thank you for your subscription!")
    // }

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                Subscribe to our newsletter to get offers by exclusive prices
                </p>

                <div className="input-areas">
                    <form>
                        <input type='email' id='subscribe' name='email' placeholder="Enter e-mail:"
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline' onClick={subscribeMail}>Subscribe</Button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Footer;