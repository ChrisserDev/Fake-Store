import React, {useEffect} from 'react'
import './Contact.css'
import { AiOutlineCheckCircle } from 'react-icons/ai';

function Contact() {
  const [firstName, setUserFirstName] = React.useState('');
  const [lastName, setUserLastName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [outputMessage, setOutputMessage] = React.useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    //Add a specific time frame for this message to be displayed
    setOutputMessage(true);
    
    setTimeout(() => {
      setOutputMessage(false);
     }, 3000);

    setOutputMessage(<><i><AiOutlineCheckCircle /></i> <strong>SUCCESS: </strong> We have received your details!</>);
    //Clear the textbox
    setUserFirstName('');
    setUserLastName('');
    setMessage ('');
  };
  
  return (
    <div className='contact-container'>
        <h1>Contact Us</h1>
        <form className='form-container'>
          <input type='text' value={firstName} placeholder='First Name' onChange={(e) => setUserFirstName(e.target.value)}></input>
          <input type='text' value={lastName} placeholder='Last Name' onChange={(e) => setUserLastName(e.target.value)}></input>
          <textarea type='text' rows="5"  value={message} placeholder='Write Your Message Here' onChange={(e) => setMessage(e.target.value)}></textarea>
          <button id='submit-form-btn' type='submit' onClick={handleSubmit}>Submit</button>
          <div className="submit">
            <div className="checkicon">
            <h3 className='show-message'>{outputMessage}</h3>
          </div>
          </div>
        </form>
    </div>
  )
}

export default Contact