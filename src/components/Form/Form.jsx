import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import s from './Form.module.css'
import { MyContext } from 'context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const { register, reset, handleSubmit, formState: { errors }} = useForm();

    const { login } = useContext(MyContext)
    const navigate = useNavigate();

    const submit = data => {
        // console.log(data);
        login(data.name)
        navigate('/')
        reset();
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit(submit)}>
                <h2>Registed</h2>
                <label>Name
                    <input {...register('name', { required: true })} autoFocus />
                </label>
                <label>Password
                    <input {...register('password', { required: true })} type='password' />
                    {errors.password && <span className="error">Please enter your password</span>}
                </label>
                <button>Register</button>
            </form>
        </div>
    );
}

export default Form