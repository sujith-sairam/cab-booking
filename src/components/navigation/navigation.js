import './navigation.css';

function Navigation(){
    return(
       <div className="navigation">
        <img className='logo-container' src="https://t4.ftcdn.net/jpg/04/08/19/81/240_F_408198155_jzTd2EV8j1QY6RSN1bf66r8mwFzZ7sPg.jpg" alt=""/>
        <div className='nav-links-container'>
            <label className='nav-link'><strong>Home</strong></label>
            <label className='nav-link'><strong>Ride Facilities</strong></label>
            <label className='nav-link'><strong>Contact us</strong></label>
        </div>
       </div>
    );
}

export default Navigation;