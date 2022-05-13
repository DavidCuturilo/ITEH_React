import React from 'react'
import './Form.css'

function Form() {
    return (
        <div className='bodyF'>
        <div className="form-container">
          <form className="register-form">

            <input
              id="first-name"
              className="form-field"
              type="text"
              placeholder="First name"
              name="firstName"
            />

            <input
              id="last-name"
              className="form-field"
              type="text"
              placeholder="Last name"
              name="lastName"
            />

            <input
              id="email"
              className="form-field"
              type="text"
              placeholder="Email"
              name="email"
            />
             <input
              id="message"
              className="form-field"
              type="text"
              placeholder="Message"
              name="message"
            />

            <button className="form-field" type="submit">
              Send
            </button>
          </form>
        </div>
        </div>
    );
}

export default Form;