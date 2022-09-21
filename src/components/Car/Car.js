import React from 'react';

import {DataCard, DataRow} from "../DataCard";
import css from "./Car.module.css"

function Car({car, disabled, onUpdate, onDelete}) {
    const {id, model, price, year} = car;
    return (
        <DataCard id={'car' + id}>
            <DataRow caption={'id'}>{id}</DataRow>
            <DataRow caption={'model'}>{model}</DataRow>
            <DataRow caption={'price'}>{price}</DataRow>
            <DataRow caption={'year'}>{year}</DataRow>
            <div className={'layout-footer'}>
                <div className={'layout-button'}>
                    <button className={css.editButton} disabled={disabled} onClick={() => onDelete(car)}>Delete</button>
                    <button className={css.editButton} disabled={disabled} onClick={() => onUpdate(car)}>Update</button>
                </div>
            </div>
        </DataCard>
    )
}

export {Car}