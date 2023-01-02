import SignIn from "../../sign in/sign-in";
import SignUp from "../../sign up/sign-up";
import './authentication.css';


function Authentication(){
    return(
        <div className="authentication-container">
      <SignIn/>
      <SignUp/>
      </div>
    );
}

export default Authentication;