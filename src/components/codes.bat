export function Taskbar({ selectedcategory, onCategoryChange}){
    function categories = ['All','Daily','Weekly','Monthly','Year'];
}
return (
    <div>
<nav className="navbar">
            <ul>
{
    categories.map((category,index) === category ? 'active' : '')
        <li
key={index}
className={selectedcategory}
        />
    )
}


            </ul>
        </nav>
    </div>
)



form.jsx
import './todoapp.css'; 
export function Form(){
    return(





        <form>

<>
<select>
    <option value='default'>Duration</option>
    <option value='Day'>Day</option>
    <option value='weekly'>Weekly</option>
    <option value='Monthly'>Monthly</option>
    <option value='year/'>Year</option>
    
    

</select>


           <input type ="text" placeholder="Enter A todo...." className="task-input"/> 
       <button className="button-Add" type="submit">Add Task</button> 
       </>
   </form>
    )
}
export default Form;


.......................>


header ....?
import './todoapp.css'; 
export function Header(){
    return(
        <div className="header">
            <h1>Make a <h>better</h> plan<br></br> for your life</h1>
            <p>whoever you are, whatever you are looking for, we<br></br> have the perfect place for you</p>
        </div>
    );
}
export default Header;


..........>




Taskbar............>

import './todoapp.css'; 
export function Taskbar(){
    return(
        <>
        <div className="Taskbar-content">
            <nav>
<ul>

    <li>
        <a href="" className='active'>All</a>
    </li>
    <li>
        <a href="">Daily</a>
    </li>
    <li>
        <a href="">Weekly</a>
    </li>
    <li>
        <a href="">Monthly</a>
    </li>
    <li>
        <a href="">Year</a>
    </li>
</ul>


            </nav><br></br>
           <div className='item'>
            <div className='task-nbr'>
                <h4>1</h4>
             </div>
             <div className='task-name'>
                <p>Learn react</p>
             </div>

             <div className='action'>
                <div>
                    <button className='Action-btn'>Edit</button>
                </div>
                <div>
                    <button className='Action-btn'>Delete</button>
                </div>
             </div>


           </div>
        </div>
        </>
    );
    
}
export default Taskbar;

................>



todoapp css

.header{
    background-color: rgb(247, 249, 252);
color:rgba(28, 26, 31, 0.904);
margin-top:-6%;
padding:2px;
font-size: 10px;
margin:left;
.container{
background-color:white;
border-bottom:4px solid blue;
margin:left;
text-align: left;
}
}
h{
  color:darkblue;
}
.task-input
{
  height: 30px;
  margin-left: 2%;
  background-color: #ebece4;
}
.button-Add{
background-color: rgb(15, 15, 39);
color:white;
border-radius: 2px;
margin-left:8px;
}
body{
    background-color: rgb(201, 214, 210);
    position: inherit;
    
}
.container{
    background-color:white;
    height:600px;
    width: 860px;
    margin-left: 34%;
    display: flex;

    
}

.action{
  
}


.image{
background-color:url('Image.jpg');
left: 0px;
}
form{
    border-bottom:2px solid rgb(11, 11, 66);
    border-radius: 5x;
}

.Taskbar-content{
  position: absolute;
  display: flex;
  flex-direction: row;
  margin:left;
}
.Taskbar-content nav ul{
  text-decoration: none;
  margin:left;
  display: flex;
  flex-direction: row;
}
.Taskbar-content nav ul li{
  display:block;
  background-color: darkblue;
  color:white;
  width:130px;
 
  padding :0px;
  border: 1px solid gray;
  text-decoration: none;
  margin:left;
  display: flex;
  flex-direction: row;
}

.Taskbar-content nav ul li a
{
  text-decoration: none;
  color:black;
  margin:left;
  color:white;
}





























#root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }
  
  .card {
    padding: 2em;
  }
  
  .read-the-docs {
    color: #888;
  }
  

  ...............>

  todoapp.jsx



  
import './todoapp.css'; 
import Header from './Header';
import Form from './Form';
import Taskbar from './Taskbar';

export function App() {
   return (
<>
<div className='image'></div>
<div className="container">
   <div className="app-wrapper">


</div>
<Header />
<Form />
<Taskbar />
        </div>

        </div> 

   </div>
   </>
   );
}
export default App;

................>




////////////////////////////////
//////////////////////////
////////////////////////
/////////////////////
////////////
App.jsx CODES


import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [action,setAction] = useState('Sign Up');
 

  return (
    
    <div className='container'>
        <div className='header'>
          {action==="Sign Up"?
            <div className='text'>Sign Up</div>:<div className='text'>Sign in</div>}
            <div className='underline'></div>
            </div>
            <div className='inputs'>
               {action==="Login"?<div></div>:
              
               <input type='firsname'  placeholder='Enter your Firstname' className='input'/>
               }
                {action==="Login"?<div></div>:
              
              <input type='lastname'  placeholder='Enter your Lastname'  className='input'/>
              }
        <input type='email'  placeholder='Enter your Email'  className='input'/>
                <input type='password'  placeholder='Enter your password'  className='input'/>
                {action==="Sign Up"?<div></div>:
              
              <input type='password'  placeholder='Enter your password'  className='input'/>
              }
            <div className="forgot password">Lost password?<span>Click here</span></div>
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"}  onClick={()=>{setAction("Login")}}>Login</div>
          
          </div>
            </div>
    
         </div>
  
  );
}

export default App;



////////////////////////////////////
///////////////////////////////////
////////////////////////////////
//////////////////////////////
////////////////////
About US PAGE
/////////////
/////////////
///////////
import Navbar from '../components/navbar'
import './about.css'

export function About() {


    return (




        <div className='Myblog'>
            <Navbar />
            <div className="column">
                <div className="about-img"></div>
            </div>
          <div className="column">
                <div className="tabs">

                    <div className="single-tab">
                        <h2>Skills</h2>

                    </div>
                    <div className="single-tab">
                        <h2>About</h2>

                    </div>
                    <div className="single-tab">
                        <h2>experience</h2>

                    </div>


                </div>
                <div className="tab-content">
                    {/** About content */}
                    <div className="content">
                        <h2>My story</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nobis totam cum vero harum ullam, excepturi
                            ?</p>
                        <h3>as our shop Having 5 year of Experience</h3>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nobis totam cum vero harum ullam, excepturi
                            </p>

                    </div>
                    {/*Skills Content */}

                    <div className="content">
                        <h2>Skills</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           
                            </p>
                        <h3>as our shop Having 5 year of Experience</h3>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            
                           ?</p>

                 


                     
               

                    </div>

                        {/** Experience content */}
                        <div className="content">
                      

                  



                    </div>



                </div>
            </div>




            {/*<section className='Footer'>@2023 all right reserved</section> */}
        </div>








    );
}

export default About;



















<div className='task-nbr'>

<div className='task-name'>

  <div className='action'>


  /////////////////////////////////
  //////////////
  
              <h2>About us Information</h2><br></br>              <p>Welcome to [Shop HERO]! We are a small but passionate team of entrepreneurs who are dedicated to providing our customers with the best possible shopping experience. We offer a wide range of high-quality products at competitive prices, and we are always looking for new and innovative ways to improve our services.

Our story began in 2023, when we realized that there was a need for a more personalized and customer-centric shopping experience. We wanted to create a shop where customers could find everything they needed, and where they would feel like they were part of the family.

We believe that everyone deserves to have access to high-quality products at affordable prices. That's why we source our products from the best suppliers around the world, and we work hard to keep our prices as low as possible.

We are also committed to providing our customers with the best possible shopping experience. We offer a variety of convenient shipping and return options, and we have a team of friendly and knowledgeable customer service representatives who are always happy to help.

We are grateful for the support of our customers, and we are committed to providing them with the best possible shopping experience. Thank you for choosing [shop name]!



</p>






/////////////////////////////////////////////////
////////////////////////////////
///////////////////////////////////
////////////
 <label value='email' className='label'>Email</label><br />
              <input placeholder='Enter your email....' type="email" id="email" /><br /><br />
              <label value='pwd1'>Password</label><br />
              <input placeholder='Enter password....' type="password" id="pwd1" />
              <br /><br />

              <button type="submit" className='sub-butt'>Submit</button><br/>


/////////////////////////
///////////////////
//////////////////////
///////////////////
//////////////


import Navbar from '../components/navbar'
// import React,{useState} from 'react'
import './Blog.css'
import Pic from '../assets/pic6.jpg'
// import pic1 from '../components/Assets/pic3';

export function Blog () {


    return (
        <>
          <Navbar />
     <div className="blog-contain">
        <h2>Add Blog </h2>
        <div className="Addlogcontain">
          <div className="form-content">
               
                <div className="left"><img src={Pic} alt='img-left'/>

                </div>
                <div className="right">
                <form>
                 
                <label value='title'>Title</label><br />
                <input type='title' id='title' placeholder='Enter a title' /><br/>
                <label>Description</label><br/>
                <textarea id='Description' placeholder='Enter your message..........' /><br/>
                <label>Choose image</label><br/>
                <input type="file" id="myFile" name="filename"></input><br/><br/>
                <label htmlFor=""></label>
                <select>
                <option value='default'>Category</option>

                    <option value='T-shirt'>T-shirt</option>
                    <option value='T-shirt'>T-shirt</option>

                    <option value='Shoes'>Shoes</option>
                    <option value='T-shirt'>T-shirt</option>


                </select>


                </form>
               
            </div>
        </div>
     </div>
     </div>

    
     <div className="Footer2">@2023 all right reserved</div>
   
     </>

    );


}

export default Blog;



/////css for this
/////////
/////////
{/*Blog post css*/} 

.blog-contain{
    background-color: rgb(221, 213, 207);
    margin-top: 5%;
    width:50vw;
    height:80vh;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    margin-top: 5%;
  
  
  }
  .blog-contain:after
  {
  content: '';
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  filter: blur(50px);
  }
  .form-content{
    max-width: 850px;
    display: grid;
    grid-template-columns:repeat(2,1fr);
    background-color:#fff;
  
  }
  .left{
    height:100%;
    background-image: url("assets/pic10.jpg") no-repeat center;
    background-size:cover;
  }
  .img-left{
    width:20vw;
    height: 20vh;
  }
  .right{
    margin-left:-25%;
    height:40vh;
  }

///////////////////////
///////////////////
/////////////////
//Navigations


// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import {AiOutlineHome} from 'react-icons/ai'
// import {FcAbout} from 'react-icons/fc'
// import {FcContacts} from 'react-icons/fc'
// import {GrLogin} from 'react-icons/gr'
// import {BiLogoShopify} from 'react-icons/bi'
export function Navbar() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // console.log("MENU OPEN", mobileMenuOpen)
  return (
   {/* <nav>
      <h3 className='logo'>Weekly Wonders.</h3>
      <ul className='desktop-menu'>
        <Link to="/"><i><AiOutlineHome /></i>Home</Link>
        <Link to="/about"><i><FcAbout /></i>About</Link>
        <Link to="/contact"><i><FcContacts /></i>Contact</Link>
        {/* <Link to="/blog">Blog</Link> 
        <Link to="/Login"><i><GrLogin /></i>Login</Link>
    
      </ul>

      <ul className={`mobile-menu ${mobileMenuOpen === false?' hidden':''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">login</Link>
                <Link to="/Blogpost">Blogpost</Link>
            </ul>

      <span className='menu'>
        <button onClick={(e) => {
          e.preventDefault()
          setMobileMenuOpen(!mobileMenuOpen)
        }}>
          Menu
        </button>

      </span>
    </nav>*/}
  )
}

export default Navbar;

