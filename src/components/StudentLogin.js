import { useHistory } from 'react-router-dom';

const StudentLogin = () =>{
    const history = useHistory();

    return(
        <div>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button onClick={()=> {history.push('/StudentProfile')}}>
                Login
            </button>
        </div>
    )
}
export default StudentLogin 