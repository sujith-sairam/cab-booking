import './sign-in.css';

function SignIn(){
    return(
        <div>
            <h2>Already have an Account</h2>
            <form>
                <label>Email</label>
                <input required
                type='text' 
                />
                <label>Password</label>
                <input required
                type='password'
                />
                <button>SIGN IN</button>
            </form>
        </div>
    );
}

export default SignIn;