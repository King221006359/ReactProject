import Navbar from '../components/navbar'
import './comment.css'
import '../App.css'

import pic25 from '../assets/pic26.jpg'

import Footer from './Footer'
export function Full() {




    return (
        <>
       
          <Navbar /> 

              <div className="contner">
                
            <div className="leftsde">
            <img src={pic25} className='pice3'/>
            </div>
            <div className="rightsde">
            <h><strong>Business,Travel </strong>- octob.2023</h>
            <h4><strong>‘Something’s going on here’: SA Startup Week connects founders to resources, inspiration and real talk</strong></h4><br />
            <p>Awareness emerged as an early theme as would-be fledgling and established entrepreneurs gathered for San Antonio Startup Week on Monday morning on the 24th floor of Frost Tower, 
                with its 360-degree views of downtown and beyond.Awareness emerged as an early theme as would-be fledgling and established entrepreneurs gathered for San Antonio Startup Week on Monday morning on the 24th floor of Frost Tower, 
                with its 360-degree views of downtown and beyond.Awareness emerged as an early theme as would-be fledgling and established entrepreneurs gathered for San Antonio Startup Week on Monday morning on the 24th floor of Frost Tower, 
                with its 360-degree views of downtown and beyond.</p>
           
            <div className='comment-form'>
                <form>
                <label>Leave a comment</label><br />
                            <textarea id='Description' placeholder='Enter your message..........' className='textareaa'/><br />
                         
                            <button className='btn1'>Post</button>
                </form>
            </div>
           
            </div>
            
            </div> 
            <div className="foter">
            <Footer /> 
            </div>
          
         
     
           
           
        </>

    );
}

export default Full;


