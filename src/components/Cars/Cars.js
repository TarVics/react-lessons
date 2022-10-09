import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carsActions} from "../../redux";
import {Car, CarForm, DataCard} from "..";

function Cars() {
    const dispatch = useDispatch();
    const {items: cars, current, error, loading} = useSelector(state => state.carsReducer);

    useEffect(() => {
        dispatch(carsActions.getAll());
    }, [dispatch]);

    useEffect(() => {

        if (current.edit) {
            console.log('useEffect edit');
            document.body.scrollIntoView({behavior: "smooth"});
        } else if (current.car) {
            console.log('useEffect current', current);
            const el = document.getElementById('car' + current.car.id);
            el && el.scrollIntoView({behavior: "smooth"});
        }

    }, [current]);

    const onUpdate = car => {
        console.log('onUpdate', car);
        dispatch(carsActions.setCurrent({car, edit: true}));
    }

    const onDelete = car => {
        console.log('onDelete', car);
        dispatch(carsActions.deleteById(car.id));
    }

    const onSubmit = car => {

        if (current.edit) {
            console.log('onSubmit edit', car);
            dispatch(carsActions.updateById(car));
        } else {
            console.log('onSubmit create', car);
            dispatch(carsActions.create(car));
        }
    }

    return (
        <DataCard>
            <CarForm car={current.edit && current.car} onSubmit={onSubmit}/>
            {error && <h1>{error}</h1>}
            {loading && <h1>Loading data...</h1>}
            {cars.map(val =>
                <Car key={val.id}
                     car={val}
                     disabled={current.edit && val.id === current.car.id}
                     onUpdate={onUpdate}
                     onDelete={onDelete}/>
            )}
        </DataCard>
    )
}

export {Cars}