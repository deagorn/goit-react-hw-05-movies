import React from 'react'
import s from './Loader.module.css'
import { ThreeDots } from 'react-loader-spinner';


export default function Loader() {
    return (
        <div className={s.loaderContainer}>
            <ThreeDots
                visible={true}
                height="180"
                width="180"
                color="#006494"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    
    );
}