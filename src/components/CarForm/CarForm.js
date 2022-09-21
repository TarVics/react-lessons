import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {DataCard, DataRow} from "../DataCard";
import css from "./CarForm.module.css";
import {carValidator} from "../../validators";

function CarForm({car, onSubit}) {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });

    useEffect(() => {
        if (car) {
            setValue('model', car.model);
            setValue('price', car.price);
            setValue('year', car.year);
        }
    }, [car, setValue]);

    const submitForm = (car) => {
        if (typeof onSubit === 'function') onSubit(car).then(() => reset());
    }

    return (
        <DataCard>
            <form onSubmit={handleSubmit(submitForm)}>
                <DataRow caption={'model'}><input className={css.editValue} placeholder={'model'} {...register('model')}/></DataRow>
                {errors.model && <div>{errors.model.message}</div>}
                <DataRow caption={'price'}><input className={css.editValue} placeholder={'price'} {...register('price', {valueAsNumber: true})}/></DataRow>
                {errors.price && <div>{errors.price.message}</div>}
                <DataRow caption={'year'}><input className={css.editValue} placeholder={'year'} {...register('year', {valueAsNumber: true})}/></DataRow>
                {errors.year && <div>{errors.year.message}</div>}
                <div className={'layout-footer'}>
                    <div className={'layout-button'}>
                        <button className={css.editButton} disabled={!isValid}>{car ? 'Update' : 'Create'}</button>
                    </div>
                </div>
            </form>
        </DataCard>
    );
}

export {CarForm}