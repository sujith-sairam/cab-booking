import './sign-in.css';
import {signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase';
import { useState } from 'react';

const defaultFormFields ={
    email:'',
    password:''
}

function SignIn(){

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log(response);
        resetFormFields();
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };

    return(
        <div>
            <h2>Already have an Account</h2>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>SIGN IN</button>
            </form>
        </div>
    );
}

export default SignIn;