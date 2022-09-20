import React, {useState} from 'react';
import {useForm} from "react-hook-form";

function UserForm({addUser}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = user => {
        addUser(user).then(() => reset())
    }

    return (
        <>
            <div className="layout-row" style={{width: '100%'}}>
                <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                    <input {...register("name", { required: true })} style={{width: 'calc(100% - 8px)'}}/>
                    <button style={{width: '100%'}}>ADD</button>
                </form>
            </div>
            {errors.name && <div className="layout-row">This field is required</div>}
        </>
    )
}

export { UserForm }