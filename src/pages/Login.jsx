import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar'
import './login.css'
 import {Link} from 'react-router-dom'
 import Footer from './Footer'
import image from '../assets/pic24.jpg'
import {BiSolidUserCircle} from "react-icons/bi"
import {RiLockPasswordFill} from "react-icons/ri"
export function Login() {
const navigate = useNavigate()
  const [email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
 
  
  const FormData = {
  
    email ,
    Password ,
   
  
  };
  
  const handlesignin = async (data) => {
    try {
        const response = await fetch('https://klab-blog-api.onrender.com/api/klab/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
        });
  
        if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
            alert("Login successfully")
            navigate("/")
            setEmail('')
            setPassword('')
         
  
        } else {
            console.error('Password incorrect.');
            alert("Incorrect username or password")
            navigate("/Login")
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
          <h3>Sign In </h3><br />
            <form className='form1'>
            <label><i><BiSolidUserCircle /></i></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            <input type='email' placeholder='Enter your email...' className='input'value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br />
            <label className='label'><i><RiLockPasswordFill /></i></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input type="Password" placeholder='Enter your password...' className='input' value={Password} onChange={(e) => setPassword(e.target.value)}/><br/><br />
            <button type="submit" className='btn' onClick= {(e)=>  {
                e.preventDefault()
                handlesignin(FormData)
                navigate('./Dashboard')
            }}
            >
            Sign In
            </button>
            <span>Don't have an account?</span>
              <Link to="/Signup"><span className='create'>  Create an account</span></Link><br />
              {/* <Link to="/Blog"><span className='create1'> Add blog</span></Link> */}
            

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
  
  export default Login;

  
