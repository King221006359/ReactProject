import { useState } from 'react';
import Navbar from '../components/navbar'
import './signup.css'
import {Link} from 'react-router-dom'
import image from '../assets/pic26.jpg'
import {BiSolidUser} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordFill} from "react-icons/ri"
import {FaRegUserCircle} from "react-icons/fa"
import {BsCardImage} from "react-icons/bs"
import Footer from './Footer'
// import {FaCircleUser} from "react-icons/fa"
export function Signup() {
//   const [action,setAction] = useState('Sign Up');

//define state variables


const [First_Name,setFirstname] = useState('');
const [Last_Name,setLastname] = useState('');
const [email,setEmail] = useState('');
const [Password,setPassword] = useState('');
const [Profile,setProfile] = useState('');

const FormData = {
  First_Name,
  Last_Name,
  email ,
  Password ,
  Profile,

};

const handlesignup = async (data) => {
  try {
      const response = await fetch('https://klab-blog-api.onrender.com/api/klab/user/createuser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
      });

      if (response.ok) {
          const data = await response.json();
          console.log('Response:', data);
          alert("successfully created")
          setFirstname('')
          setLastname('')
          setEmail('')
          setPassword('')
          setProfile('')

      } else {
          console.error('Failed to create user.');
          alert("Failed")
      }
  } catch (error) {
      console.error('Error:', error);

  }
};























 

  return (
    <>
  <div>
      <Navbar />
      </div>
      <div className="main-login">
      
         
        <div className="login-contain">
        <div className="left-side">
          <h3>Sign Up</h3><br />
            <form className='form1'>
            <label><i><BiSolidUser /></i></label><br />
            <input type='Firstname' placeholder='Enter your Firstname' className='input' value={First_Name} onChange={(e) => setFirstname(e.target.value)}/><br/>
            <label><i><FaRegUserCircle/></i></label><br/>
            <input type="Lastname" placeholder='Enter your Lastname...' className='input'  value={Last_Name} onChange={(e) => setLastname(e.target.value)}/><br/>
            <label><i><AiOutlineMail /></i></label><br/>
            <input type="email" placeholder='Enter your email...' className='input'  value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label><i><RiLockPasswordFill /></i></label><br/>
            <input type="Password" placeholder='Enter your password...' className='input'  value={Password} onChange={(e) => setPassword(e.target.value)}/><br/><br />
            <label><i><BsCardImage /></i>choose profile</label><br />
                            <input type="file" id="myFile" name="filename"  value={Profile} onChange={(e) => setProfile(e.target.value)}></input><br />

           <button type="submit" className='btn' onClick= {(e)=> {
                e.preventDefault()
                handlesignup(FormData)
            }}
            >
             Sign Up
            </button>
            <span>If you have an account!!</span>
         <Link to="/Login"><span className='create'>  Login</span></Link>
            </form>
        </div>
       <div className="right-side">
       <img src={image} className='img-login'/>
    
         <a href="" className="read-more">Join us</a>
       </div>
        </div>
        {/* <section className='Footer'>@2023 all right reserved</section>  */}
      </div>

      <Footer />
    </> 
     
    );
  }
  export default Signup;

  
