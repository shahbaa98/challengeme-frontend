import { useHistory } from 'react-router-dom';
import React from "react";
import { useForm } from "react-hook-form";
import './style.css'

const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

const AdminLogin = () =>{
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

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
