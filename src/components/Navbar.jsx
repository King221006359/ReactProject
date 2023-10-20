import {Link} from 'react-router-dom'
import{useState} from 'react'


export function Navbar(){
  const [menuOpen,setMenuOpen] = useState(false)
  return(
<>
<nav>
<Link to='/' className='title'>
  <strong>
  Z-Tre<i>nds</i>Blog
  </strong>
  </Link>
<div className='menuu' onClick={() =>{
  setMenuOpen(!menuOpen);
}}>

  <span></span>
  <span></span>
  <span></span>

</div>

<ul className={menuOpen ? "open" : ""}>
  <li>
    <Link to='/'><strong>Home</strong></Link>
  </li>
  <li>
    <Link to='/About'><strong>About</strong></Link>
    </li>
  <li>
    <Link to='/Contact '><strong>Contact</strong></Link>
    </li>
  <li>
    <Link to='/Login'><strong>SignIn</strong></Link>
    </li>
</ul>
</nav>
</>
  );
}
export default Navbar;