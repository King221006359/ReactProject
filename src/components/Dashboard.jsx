import { useState, useEffect } from 'react'

import Card2 from './Card2'
import NavbarAdm from '../components/NavbarAdm'
import '../App.css'

import Footer from '../pages/Footer'
import pic25 from '../assets/pic25.jpg'


// import {Link} from "react-router-dom"
// import pic21 from '../assets/pic21.jpg'
// import pic23 from '../assets/pic23.jpg'



// import pic26 from '../assets/pic26.jpg'

// import pic24 from '../assets/pic24.jpg'



export function Dashboard() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://klab-blog-api.onrender.com/api/klab/blog/readAllBlogs")
            .then((response) => response.json())
            .then((res) => {
                if (res.data) {
                    setPosts(res.data)
                }
            })
    }, [])






    // const product = [
    //     {
    //         name: 'Business,Travel,- octob3.2023',
    //         image: pic23,
    //         para: 'District officials say changes to the system ',
    //         description: 'District officials say changes to the system were instituted after the STAAR test.',
    //         link: 'Created by USAnews'
            

    //     },
      
    //     {
    //         name: 'Business,Travel,- octob3.2023',
    //         image: pic24,
    //         para: 'District officials say changes to the system .',
    //         description: 'District officials say changes to the system were instituted after the STAAR test.',
    //         link: 'Created by USAnews'
    //     },
    //     {
    //         name: 'Business,Travel,- octob3.2023',
    //         image: pic26,
    //         para: 'District officials say changes to the system .',
            
    //         description: 'District officials say changes to the system .',
    //         link: 'Created by USAnews'
           

    //     },
    //     {
    //         name: 'Business,Travel,- octob3.2023',
    //         image: pic21,
    //         description: 'District officials say changes to the system ',
    //         para: 'District officials say changes to the system were instituted after the STAAR test.',
    //         link: 'Created by USAnews'

    //     },
    //     {
    //         name: 'Business,Travel,- octob3.2023',
    //         image: pic26,
    //         para: 'District officials say changes to the system .',
            
    //         description: 'District officials say changes to the system .',
    //         link: 'Created by USAnews'
           

    //     },
    //     {
    //         name: 'Business,Travel,- octob3.2023',
    //         image: pic21,
    //         description: 'District officials say changes to the system ',
    //         para: 'District officials say changes to the system were instituted after the STAAR test.',
    //         link: 'Created by USAnews'

    //     }
      
  

    // ]
    console.log("POSTS", posts)

    return (
        <>
        <div>
           
          
            <NavbarAdm />
            
            {/* <section className='hero'> */}
             <div className='Trending'>
                <h7><strong>Z-</strong><u>tren</u><i>ding</i></h7><br/>
                </div><br/><br/>
             <div className="contn">
                
            <div className="leftsd">
            <img src={pic25} className='imagee'/>
            </div>
            <div className="rightsd">
            <h><strong>Business,Travel </strong>- octob.2023</h><br /><br/>
            <h4><strong>‘Something’s going on here’: SA Startup Week connects founders to resources, inspiration and real talk</strong></h4><br />
            <p>Awareness emerged as an early theme as would-be fledgling and established entrepreneurs gathered for San Antonio Startup Week on Monday morning on the 24th floor of Frost Tower, 
                with its 360-degree views of downtown and beyond.</p>
            </div>
            </div>

            {/* </section> */}

            <section className='coco grid-container'>
            {posts.length > 0 ? posts.map((post, index) => (
                    <Card2 key={index} name={post.blogTitle} image={post.bogImage} author={post.author} description={post.blogContent} link={post.link} />
                )
                ) : <p>Loading posts...</p>}
    
      
        


        </section>

       
        <Footer />
</div>
        </>
    );
}

export default Dashboard;


