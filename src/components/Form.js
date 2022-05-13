import React, {useState} from 'react'
import './Form.css'

function Form() {

  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  const [enteredMail, setEnteredMail] = useState('');
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);

  const [enteredMess, setEnteredMess] = useState('');
  const [enteredMessTouched, setEnteredMessTouched] = useState(false);


  const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
  const firstNameInputIsInvalid = !enteredFirstNameIsValid && enteredFirstNameTouched;

  const enteredLastNameIsValid = enteredLastName.trim() !== '';
  const lastNameInputIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched;

  const enteredMessIsValid = enteredMess.trim() !== '';
  const messInputIsInvalid = !enteredMess && enteredMessTouched;

  const enteredMailIsValid = enteredMail.includes('@');
  const mailInputIsInvalid = !enteredMail && enteredMailTouched;

  let formIsValid = false;

  if (enteredMessIsValid && enteredMailIsValid && enteredFirstNameIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  }

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  }

  const messInputChangeHandler = (event) => {
    setEnteredMess(event.target.value);
  }

  const mailInputChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  }

  function setFieldAsTouched(isTouched){
    setEnteredMessTouched(isTouched);
    setEnteredMailTouched(isTouched);
    setEnteredLastNameTouched(isTouched);
    setEnteredFirstNameTouched(isTouched);
  }
  function emptyAllFields(){
    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredMail('');
    setEnteredMess('');
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFieldAsTouched(true);

    if (formIsValid) {
      alert("Successfully sent message, we will respond as soon as possible :)!")
      setFieldAsTouched(false)
    } else {
      alert("All fields are required!")
      return;
    }
    emptyAllFields();
  }

  const classesFN = firstNameInputIsInvalid ? 'form-field-invalid' : 'form-field';
  const classesLn = lastNameInputIsInvalid ? 'form-field-invalid' : 'form-field';
  const classesM = messInputIsInvalid ? 'form-field-invalid' : 'form-field';
  const classesMail = mailInputIsInvalid ? 'form-field-invalid' : 'form-field';

    return (
      <div className='bodyF'>
      <div className="form-container">
        <form onSubmit={formSubmitHandler} className="register-form">

          <input
            id="first-name"
            className={classesFN}
            type="text"
            placeholder="First name"
            name="firstName"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
          />

          <input
            id="last-name"
            className={classesLn}
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={lastNameInputChangeHandler}
            value={enteredLastName}
          />

          <input
            id="email"
            className={classesMail}
            type="text"
            placeholder="Email"
            name="email"
            value={enteredMail}
            onChange={mailInputChangeHandler}
          />
          <input
            id="message"
            className={classesM}
            type="text"
            placeholder="Message"
            name="message"
            value={enteredMess}
            onChange={messInputChangeHandler}
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