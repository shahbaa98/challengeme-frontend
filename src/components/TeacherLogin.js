import { useHistory } from 'react-router-dom';

const Teacherlogin = () =>{
    const history = useHistory();
    return(
        <div>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button onClick={()=> {history.push('/TeacherProfile')}}>
                Login
            </button>
        </div>
    )
}
export default Teacherlogin 