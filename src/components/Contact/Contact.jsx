import React, { forwardRef, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'leaflet/dist/leaflet.css';
import MapLeaflet from './MapLeaflet';
import './Contact.css'
import Footer from '../Footer/Footer';
import Nav from '../Navbar/Nav';
import SocialIcons from '../Social Icons/SocialIcons';

const ContactComponent = forwardRef((props,ref) => {

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("0Z3OS-QvD-2OjcOaS");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_i1u2g6b";
    const templateId = "template_gblhlyo";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
        phone: phoneRef.current.value, // Include phone number in the email template
        email: emailRef.current.value // Include phone number in the email template
      });
      alert("Email successfully sent. Please check your inbox.\n\nName: " + nameRef.current.value + "\nEmail: " + emailRef.current.value + "\nMessage: " + messageRef.current.value + "\nPhone: " + phoneRef.current.value); // Display name, email, message, and phone number in the success message
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };





  return ( <>
  
  <div ref={ref} className='connect-container'>
  <Nav/>
  <SocialIcons/>
  <h2 className="connect w-full lg:w-3/4 px-4 lg:p-4 lg:h-full rounded-lg  text-3xl md:text-2xl text-white font-bold mb-4 text-center md:text-left mx-auto">Reach out to us</h2>

  <div className="contactContent flex flex-col lg:flex-row sm:flex-col ">

{/* Contact Card */}
<div className="contactCard text-white w-auto md:w-1/2 lg:w-1/3 p-4 lg:p-4 lg:h-full lg:mt-28 mx-8 rounded-lg shadow-2xl bg-zinc-800
hover:bg-amber-500 transition ease-in-out duration-300">
  <h2 className="contactInfo text-xl font-semibold mb-4">Contact Information</h2>
  <div className="flex flex-col space-y-2">
    <div>
      <h3 className="text-lg font-semibold">Address:</h3>
      <p>Silverline Tours & Travels</p>
      <p>Lokhandwala, Andheri West</p>
      <p>Mumbai 400053</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Phone:</h3>
      <p>+91 - 7506526928</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Email:</h3>
      <p>bhaswatibom@gmail.com</p>
    </div>
  </div>
</div>

{/* Contact Form */}
<div className="form w-auto md:w-11/12 lg:w-1/2 sm:w-full
 p-4 lg:p-4 lg:h-full rounded-lg shadow-2xl mt-8 bg-inherit bg-opacity-95 
 hover:bg-indigo-500 transition ease-in-out duration-300
  border-4 border-slate-600 border-opacity-50">
 
  <h2 className="contactUs text-2xl font-bold mb-4">Contact Us</h2>
  <form className="space-y-4" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name" className="block font-semibold mb-1">Name</label>
      <input type="text" ref={nameRef} id="name" name="name" className="enter-name w-full md:w-full  px-4 py-2 border rounded-md" placeholder="Enter your name" />
    </div>
    <div>
      <label htmlFor="email" className="block font-semibold mb-1">Email</label>
      <input type="email" ref={emailRef} id="email" name="email" className="enter-email w-full px-4 py-2 border rounded-md" placeholder="Enter your email" />
    </div>
    <div>
      <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
      <input type="tel" ref={phoneRef} id="phone" name="phone" className="enter-phone w-full px-4 py-2 border rounded-md" placeholder="Enter your phone no" />
    </div>
    <div>
      <label htmlFor="message" className="block font-semibold mb-1">Message</label>
      <input type="text" ref={messageRef} id="message" name="message" className="enter-message w-full px-4 py-2 border rounded-md" placeholder="Type your message" />
    </div>
    <button type="submit" className="formButton bg-transparent text-white px-6 py-2 rounded-md border border-white border-opacity-20 hover:bg-white hover:bg-opacity-10 transition duration-300 ease-in-out">
  Submit
</button>

  </form>
</div>


</div>


</div> 
<Footer/>
</>
  );
});

export default ContactComponent;
