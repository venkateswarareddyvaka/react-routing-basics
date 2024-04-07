import {Link} from 'react-router-dom'
import './index.css'

const Header =()=>{
    return(
        <nav className="nav-container">
            {/* <img alt="rolex" 
            className="rolex-logo"
            src="https://logowik.com/content/uploads/images/275_rolex.jpg"/> */}
            <h1>Header</h1>
            <ul className="ul-con">
                <li className="li-item"><Link to="/" className='ink'>Home</Link></li>
                <li className="li-item"><Link to="/about" className='ink'>About</Link></li>
                <li className="li-item"><Link to="/contactus" className='ink'>Contact Us</Link></li>
            </ul>
        </nav> 
    )
}

export default Header