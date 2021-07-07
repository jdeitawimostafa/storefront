import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import './header.scss';
const Header = ()=>{
    return(
    <header>
        <h1>
        <Button variant="contained">

      <Link to="/">OUR STORE </Link> 
        </Button>
        </h1>
    </header>
    )
}
export default Header;
