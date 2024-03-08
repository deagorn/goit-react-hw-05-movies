import React from 'react'
import { useForm } from 'react-hook-form';
import s from './InputForm.module.css'


const InputForm = ({setsearchParams}) => {
    const { register, reset, handleSubmit } = useForm();
    
  const submit = data => {
    // console.log(data);
    setsearchParams(data.query ? { query: data.query } : {})
    reset();
  };

  return (
      <form onSubmit={handleSubmit(submit)} className={s.form}>
      <input {...register('query')} type="text" required/>
          <button>Search</button>
    </form>
  )
}

export default InputForm