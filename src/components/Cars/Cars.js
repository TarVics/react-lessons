import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/cars.service";
import {DataCard} from "../DataCard";
import {Car} from "../Car";
import {CarForm} from "../CarForm";

function Cars() {
    const [cars, setCars] = useState([]);
    const [current, setCurrent] = useState({edit: false, car: null});

    useEffect(() => {
        carsService.getAll().then(setCars);
    }, []);

    useEffect(() => {
        if (current.edit) {
            document.body.scrollIntoView({behavior: "smooth"});
        } else if (current.car) {
            document.getElementById('car' + current.car.id).scrollIntoView({behavior: "smooth"});
        }
    }, [current]);

    const onUpdate = car => {
        setCurrent({edit: true, car});
    }

    const onDelete = car => {
        const deleteCar = async (car) => {
            const res = await carsService.deleteById(car.id);
            cars.splice(cars.findIndex(value => value.id === car.id), 1);
            setCars(cars => [...cars]);
            return res;
        }

        return deleteCar(car);
    }

    const onSubmit = car => {
        const submitCar = async (car) => {
            let res;

            if (current.edit) {
                car.id = current.car.id;
                res = await carsService.updateById(car.id, car);
                cars.splice(cars.findIndex(value => value.id === car.id), 1, car);
                setCars(cars => [...cars]);
            } else {
                res = await carsService.create(car);
                setCars(cars => cars.concat(res));
            }

            setCurrent({edit: false, car});
            return res;
        }

        return submitCar(car);
    }

    return (
        <DataCard>
            <CarForm car={current.edit && current.car} onSubmit={onSubmit}/>
            {cars.map(val =>
                <Car key={val.id} car={val}
                     disabled={current.edit && val.id === current.car.id}
                     onUpdate={onUpdate}
                     onDelete={onDelete}/>)}
        </DataCard>
    )
}

export {Cars}