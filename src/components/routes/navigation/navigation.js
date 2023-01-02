import './navigation.css';
import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
function Navigation(){
    return(
        <Fragment>
       <div className="navigation">
        <img className='logo-container' src="https://t4.ftcdn.net/jpg/04/08/19/81/240_F_408198155_jzTd2EV8j1QY6RSN1bf66r8mwFzZ7sPg.jpg" alt=""/>
        <div className='nav-links-container'>
            <Link to='home'><label className='nav-link'><strong>Home</strong></label></Link>
            <Link to='ride'><label className='nav-link'><strong>Ride Facilities</strong></label></Link>
            <Link to='contact'><label className='nav-link'><strong>Contact us</strong></label></Link>
        </div>
       </div>
       <Outlet/>
       </Fragment>
    );
}

export default Navigation;