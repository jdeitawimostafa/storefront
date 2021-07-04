import {Link} from 'react-router-dom'
const Header = ()=>{
    return(
    <header>
        <h1>
      <Link to="/">OUR STORE </Link> 
        </h1>
        <nav>
            <ul>
                <li>
                  <Link to="/cart" >Cart</Link> 
                </li>
            </ul>
        </nav>
    </header>
    )
}
export default Header;