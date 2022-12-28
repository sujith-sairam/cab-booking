import './login.css';

function Login(){
    return(
        <div>
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
                <button >SIGN UP</button>
            </form>
        </div>
    );
}

export default Login;