import React, { useState } from 'react';
import Navbar from '../components/navbar';
import './contact.css'
import Footer from './Footer'
import Pic1 from '../assets/pic23.jpg'
export function Contact() {


    const [Fullname,setFullname] = useState('');
    const [Email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    
    
    const FormData = {
      Fullname,
      Email,
      message ,
     
    
    };
    
    const handlesignup = async (data) => {
      try {
          const response = await fetch('https://blissmothies.onrender.com/blissmothies/contact/send', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
          });
    
          if (response.ok) {
              const data = await response.json();
              console.log('Response:', data);
              alert("Message sent")
              setFullname('')
              setEmail('')
              setMessage('')
              
    
          } else {
              console.error('Failed to Send message.');
          }
      } catch (error) {
          console.error('Error:', error);
      }
    };
    
    
    
















return (
        <>
            <Navbar />
            <section className='contact'>
                <div className='content'>
                   

                </div>
                <div className='container'>
                <div className="heading">
                {/* <h>Contact us</h> */}
        <img src ={Pic1} className='picee'/>
       
        
     </div>


                    {/* <div className="contactInfo">
                        <div className="box">
                            <div className="icon">
                            </div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>kg183,Kigali ,Nyarugenge,Nyamirambo</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                            </div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+250-785-362-435</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon">
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>shophero12@gmail.com</p>
                            </div>
                            

                        </div>
                    </div> */}

                    <div className="contactForm">
                        <form>
                            <h2>Meet Us/Contact Form</h2>
                            <div className="inputBox">
                                <input type="text" name="" required="" value={Fullname} onChange={(e) => setFullname(e.target.value)}/>
                                <span>Full name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required="" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                                <span>Email</span>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="" required="" value={message} onChange={(e) => setMessage(e.target.value)}/>
                                <span>Type your Message................</span>
                            </div>
                            <div className="inputBox">
                            <button type="submit" className='btn' onClick= {(e)=> {
                e.preventDefault()
                handlesignup(FormData)
            }}
            >
             Send message
            </button>


                                {/* <input type="submit" name="" value="Send to"></input> */}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <section className='Footer'>@2023 all right reserved</section>  */}

        </>
    );
}

export default Contact;

