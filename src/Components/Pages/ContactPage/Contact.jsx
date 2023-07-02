import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import './Contact.css';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add a specific time frame for this message to be displayed
    setOutputMessage(
      <div>
        <i>
          <AiOutlineCheckCircle />
        </i>{' '}
        <strong>SUCCESS: </strong> We have received your details!
      </div>
    );

    setTimeout(() => {
      setIsOpen(false);
      setOutputMessage('');
    }, 3000);

    // Clear the text inputs
    setFirstName('');
    setLastName('');
    setMessage('');
    setIsOpen(true);
  };

  const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  };

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <textarea
          type="text"
          rows="5"
          value={message}
          placeholder="Write Your Message Here"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button id="submit-form-btn" type="submit">
          Submit
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Form Confirmation"
        >
          <div className="modal-container2">
            <i id='modal-check-icon2'>
              <AiOutlineCheckCircle />
            </i>
            <h2>SUCCESS: We have received your details!</h2>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default Contact;