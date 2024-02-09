import{Link} from  "react-router-dom" 


export default function Navbar () {
     return (
       <>
         <Link to="/">Kalvium ❤️ </Link>
         <Link to="/About">About</Link>
         <Link to="/Contacts">Contact</Link>
       </>
     );
}