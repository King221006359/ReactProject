import {Link} from "react-router-dom"
import '../App.css'
// import {IoPersonCircle} from 'react-icons/io'


const Card = ({name,image,description,author,link}) => {
    return (
        <>
            <div className='Cardi'>
                <img src={image} />
                <h4>{name}</h4>
                 <p><strong></strong>{description}</p>
                 <span><strong>{author}</strong></span>
                 <p>{link}</p>
                <Link to="/Full"><span className="ree"> Read more</span></Link>
               
               

           </div>



        </>
    );
}

export default Card;

