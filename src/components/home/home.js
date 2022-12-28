import { Outlet } from 'react-router-dom';
import Input from '../input/input';
import './home.css';


function Home(){
    return(
        
       <div className="home">
        
           <Input />
           <Outlet/>
       </div>
    );
}

export default Home;