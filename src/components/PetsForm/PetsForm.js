import React from 'react';
import {useForm} from "react-hook-form";

import css from "./PetsForm.module.css";
import {DataCard} from "../DataCard";

function PetsForm({label, onValue}) {
    const { register, handleSubmit, reset, formState: { isValid } } = useForm({mode: 'onChange'});
    const onSubmit = data => {
        if(typeof onValue === 'function') onValue(data.name);
        reset();
    }

    return (
        <DataCard>
            <form className={css.PetsForm} onSubmit={handleSubmit(onSubmit)}>
                {label && <label htmlFor={"name"}>{label}:</label>}
                <input {...register("name", {required: true})} />
                <input disabled={!isValid} type="submit" value={"Save"}/>
            </form>
        </DataCard>
    );
}

export {PetsForm}