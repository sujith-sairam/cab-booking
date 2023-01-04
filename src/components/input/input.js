import { useState } from 'react';
import './input.css';

const defaultFormFields = {
    pickup:'',
    drop:'',
    time:'',
    car:''
}

function Input(){
    const [FormFields,setFormFields] = useState(defaultFormFields);
    const {pickup,drop,time,car} = FormFields;
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormFields({...FormFields,[name]:value});
    }
    
    return(
      <div className="input-container">
        <div className="input">
            <label>Pickup Location</label>
            <input required type='text' name='pickup' placeholder="pickup place" value={pickup} onChange={handleChange}/>
        </div>
        <div className="input">
            <label>Drop Location</label>
            <input required  type='text' name='drop' placeholder="drop place" value={drop} onChange={handleChange}/>
        </div>
        <div className="input">
            <label>Enter Timing</label>
            <input required  type='datetime-local' name='time' placeholder="time" value={time} onChange={handleChange}/>
        </div>
        <div className='input'>
            <label>Choose Your Car</label>
            <select name='car' value={car} onChange={handleChange}>
                <option value="mini">Mini</option>
                <option value="prime">Prime</option>
                <option value="prime-sedan">Prime Sedan</option>
                <option value="prime-suv">Prime SUV</option>
            </select>
        </div>
        <div>
            <button className='submit'>Book Now</button>
        </div>
      </div>
    );
}

export default Input;