import { useHistory } from 'react-router-dom';
import './style.css'


const AdminLogin = () =>{
    const history = useHistory();

    function onSubmit() {
        history.push('/AdminProfile')
    }

    return (

            <div className="app-com">
                <form
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = "Required";
                        }
                        if (!values.password && values.username === "test") {
                            errors.password = "Required";
                        }
                        return errors;
                    }}>
                    <input type="text" required placeholder="username"/>
                    <br/>
                    <input type="text" required placeholder="password"/>
                    <br/>
                    <button type="submit" >submit</button>
                </form>
            </div>
        )

}

export default AdminLogin 
