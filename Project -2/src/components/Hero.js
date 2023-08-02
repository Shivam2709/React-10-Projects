import React, { useState } from 'react';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import './hero.css';

const Hero = () => {
    const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Textarea: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      if (formData.Name.trim() === '') {
        validationErrors.Name = 'Name is required';
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.Email)) {
        validationErrors.Email = 'Invalid Email format';
      }
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        // Form is valid, do something with the data
        console.log('Form Data:', formData);
      } else {
        alert('Please correct the form errors.');
      }
    };

  return (
    <main className='container'>
      <div className="left-side">
        <div className="btn">
          <button className='primary-btn'><MdMessage />  VIA SUPPORT CHAT</button>
          <button className='primary-btn'><FaPhoneAlt/>  VIA CALL</button>
        </div>
          <button className='secondary-btn'><HiMail/>VIA EMAIL FORM</button>
        
        <div className='form'>
            <form className='form'>
              <label>Name</label>
              <input 
                  type="text"
                  name="Name"
                  placeholder="type your name..."
                  value={formData.firstName}
                  onChange={handleChange}
                  className="firstName"
              />
               {errors.Name && <span className="error">{errors.Name}</span>}
              <label>E-MaiL</label>
              <input 
                  type="email"
                  className="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="type your password..."
              />
              {errors.Email && <span className="error">{errors.Email}</span>}
              <label>TEXT</label>
              <textarea 
                  type="text"
                  className="textarea"
                  name="Textarea"
                  value={formData.Textarea}
                  onChange={handleChange}
              />
              {errors.Textarea && <span className="error">{errors.Textarea}</span>}
              <button className='submit' onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
        

      </div>

      <div className='right-side'>
        <img src="/images/contact.svg" alt="image" />
      </div>
    </main>
  )
}


export default Hero;