import Navbar from '../components/navbar'
import './about.css'
import Pic from '../assets/pic6.jpg'
import Pic1 from '../assets/pic23.jpg'
import {MdOutlineReadMore} from 'react-icons/md'
import Footer from './Footer'
// import pic1 from '../components/Assets/pic3';

export function About () {


    return (
        <>
          <Navbar />
     <div className="heading">
        <img src ={Pic1} className='pice'/>
        <h>About us</h>
        
     </div>
     <div className="container">
     <section className='about'>
        <div className='about-image'>
            <img src={Pic} alt="image-pic" />
        </div>
        <div className="about-content">
            <h2></h2>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias 
             perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error
            <br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error.
            <br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error.
        </p>
        <a href="" className="read-more"><i><MdOutlineReadMore /></i>Read More</a>
        </div>
        <div className="about-content">
            <h2></h2>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias 
             perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error
            <br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error.
            <br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error.
        </p>
        <a href="" className="read-more"><i><MdOutlineReadMore /></i>Read More</a>
        </div>

        <div className="about-content">
            <h2></h2>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias 
             perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error
            <br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error.
            <br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laborum quod nobis corporis doloribus iusto molestias perferendis? 
             Dolorum odit minima, ipsum voluptas quaerat, vitae cumque, 
            incidunt exercitationem alias enim deleniti error.
        </p>
        <a href="" className="read-more"><i><MdOutlineReadMore /></i>Read More</a>
        </div>
     </section>

     </div>
     <Footer />
     {/* <section className='Footer'>@2023 all right reserved</section>  */}
     </>


    );


}

export default About;

