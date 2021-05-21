import { useHistory } from 'react-router-dom';

const AdminLogin = () =>{
    const history = useHistory();
    return(
        <div>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button onClick={()=> {history.push('/AdminProfile')}}>
                Login
            </button>
        </div>
    )
}
export default AdminLogin 