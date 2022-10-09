import React from 'react';

import {DataCard, DataFooter, DataRow} from "../DataCard";
import css from "./Car.module.css"

function Car({ car, disabled, onUpdate, onDelete }) {
    const { id, model, price, year } = car;

    return (
        <DataCard header={'Car #' + id} id={ 'car' + id }>
            <DataRow caption={ 'id' }>{ id }</DataRow>
            <DataRow caption={ 'model' }>{ model }</DataRow>
            <DataRow caption={ 'price' }>{ price.toString() }</DataRow>
            <DataRow caption={ 'year' }>{ year }</DataRow>
            <DataFooter>
                <button className={ css.editButton }
                        disabled={ disabled}
                        onClick={ () => onDelete(car) }>Delete</button>
                <button className={ css.editButton }
                        disabled={ disabled}
                        onClick={ () => onUpdate(car) }>Update</button>
            </DataFooter>
        </DataCard>
    )
}

export { Car }