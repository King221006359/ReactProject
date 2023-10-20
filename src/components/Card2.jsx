import {Link} from "react-router-dom"
import '../App.css'
// import {AiOutlineEdit} from 'react-icons/ai'
// import {IoPersonCircle} from 'react-icons/io'


const Card2 = ({name,image,description,author,link}) => {
    return (
        <>
            <div className='Cardi'>
                <img src={image} />
                <h4>{name}</h4>
                 <p><strong></strong>{description}</p>
                 <span><strong>{author}</strong></span>
                 <p>{link}</p>
               
               <button className="edit">Edit</button> 
               
                <button className="delete">Delete</button>
             
               
               
                <br />
               

           </div>



        </>
    );
}

export default Card2;

