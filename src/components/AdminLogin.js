import { useHistory } from 'react-router-dom';
import './style.css'


const AdminLogin = () =>{
    const history = useHistory();
    return(

        <div className="app-com">
            <input type="text" placeholder="username" />
            <br/>
            <input type="text" placeholder="password" />
            <br/>
            <button onClick={()=> {history.push('/AdminProfile')}}>
                Login
            </button>
        </div>
    )

}

export default AdminLogin 
