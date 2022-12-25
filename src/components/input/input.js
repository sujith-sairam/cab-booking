import './input.css';


function Input(){
    return(
      <div className="input-container">
        <div className="input">
            <label>Pickup Location</label>
            <input required type='text' name='pickup' placeholder="pickup place"/>
        </div>
        <div className="input">
            <label>Drop Location</label>
            <input required  type='text' name='drop' placeholder="drop place"/>
        </div>
        <div className="input">
            <label>Enter Timing</label>
            <input required  type='datetime-local' name='time' placeholder="time"/>
        </div>
        <div className='input'>
            <label>Choose Your Car</label>
            <select>
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