import { useHistory } from 'react-router-dom';
import './style.css'

const StudentLogin = () =>{
    const history = useHistory();

    return(
        <div className="app-com">
            <input type="text" placeholder="username"/>
            <br/>
            <input type="text" placeholder="password"/>
            <br/>
            <button onClick={()=> {history.push('/StudentProfile')}}>
                Login
            </button>
        </div>
    )
}
export default StudentLogin


