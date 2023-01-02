

function SignUp(){
    return(
        <div>
            <h2>Don't have an Account</h2>
            <form>
                <label>Email</label>
                <input required
                type='text' 
                />
                <label>Password</label>
                <input required
                type='password'
                />
                <button>SIGN UP</button>
            </form>
        </div>
    );

}

export default SignUp;