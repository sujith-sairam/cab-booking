import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

function SignUp(){
    const [formFields,setFormFields] = useState(defaultFormFields);
    const { displayName,email,password,confirmPassword } = formFields;
    const resetFormFields = () =>{
         setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password != confirmPassword){
            alert('Password is not matched with Confirm Password');
            return ;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch(error){
            if(error.code == 'auth/email-already-in-use'){
                alert("Account is already in use");
              }else{
              console.log('user creation error',error);
              }
        }
    }

    const handleChange = (event) => {
        const { name,value } = event.target;
        setFormFields({ ...formFields,[name]:value});
    };

    return(
        <div>
            <h2>Don't have an Account</h2>
            <form onSubmit={handleSubmit}>
            <label>DisplayName</label>
                <input required
                 type='text'
                 onChange={handleChange}
                 name='displayName'
                 value={displayName}
                />
                <label>Email</label>
                <input required
                type='text' 
                onChange={handleChange}
                name='email'
                value={email}
                />
                <label>Password</label>
                <input required
                type='password'
                onChange={handleChange}
                name='password'
                value={password}
                />
                <label>Confirm Password</label>
                <input required
                type='password'
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
                />
                <button>SIGN UP</button>
            </form>
        </div>
    );

}

export default SignUp;