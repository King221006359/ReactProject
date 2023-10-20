import { useState } from 'react';

import Navbar from '../components/navbar'
import './signup.css'
// import {Link} from 'react-router-dom'
import image from '../assets/pic23.jpg'
import {MdTitle} from "react-icons/md"
import {MdDescription} from "react-icons/md"
import {BsCardImage} from "react-icons/bs"
// import {BiCategory} from "react-icons/bi"
import Footer from './Footer'

// import {RiLockPasswordFill} from "react-icons/ri"
// import {FaRegUserCircle} from "react-icons/fa"

// import {FaCircleUser} from "react-icons/fa"
export function Blog() {
    //   const [action,setAction] = useState('Sign Up');

    const [bogImage,setBogImage] = useState('');
    const [blogTitle,setBlogTitle] = useState('');
    const [blogContent,setBlogContent] = useState('');

    
    const FormPost = {
        bogImage,
        blogTitle,
        blogContent,
      
    
    };
    
    const handleaddpost = async (data) => {
      try {
          const response = await fetch('https://klab-blog-api.onrender.com/api/klab/blog/createBlog', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data), // Use FormData directly without wrapping it in an object
          });
    
          if (response.ok) {
              const data = await response.json();
              console.log('Response:', data);
              alert("Post Added")
              setBogImage('')
              setBlogTitle('')
              setBlogContent('')
              
    
          } else {
              console.error('Failed to Add blog.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert("Failed to add")
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
                        <h3>Add Post</h3><br />
                        <form className='form1'>

                        <label><i><BsCardImage /></i>choose image</label><br />
                            <input type="file" id="myFile" name="bogImage"  value={bogImage} onChange={(e) => setBogImage(e.target.value)}></input><br />

                            <label value='title'><i><MdTitle /></i>Title</label><br />
                            <input type='title' id='blogTitle' placeholder='Enter a title' value={blogTitle} onChange={(e) =>  setBlogTitle(e.target.value)}/><br />
                            
                            <label><i><MdDescription /></i>Description</label><br />
                            <textarea id='Description' placeholder='Enter your message..........' value={blogContent} onChange={(e) => setBlogContent(e.target.value)}/><br />
                            
                           

                            {/* <label htmlFor=""><i><BiCategory /></i></label>
                            <select>
                                <option value='default'>Category</option>

                                <option value='T-shirt'>Sports</option>
                                <option value='T-shirt'>Education</option>

                                <option value='Shoes'>Politics</option>
                                <option value='T-shirt'>Business</option>


                            </select><br/><br/> */}
                            <button className='btn'
                            
                            onClick= {(e)=> {
                                e.preventDefault()
                                handleaddpost(FormPost)
                            }}
                            
                            
                            
                            >
                                
                                
                                Add blog</button><br />
                            {/* <Link to='/Dashboard'><button className='btn1'>View</button></Link> */}
                            

                        </form>
                    </div>
                    <div className="right-side">
                        <img src={image} className='img-login' />

                        <a href="" className="read-more">Join us</a>
                    </div>
                </div>
                {/* <section className='Footer'>@2023 all right reserved</section> */}
            </div>
            <Footer />

        </>

    );
}
export default Blog;


