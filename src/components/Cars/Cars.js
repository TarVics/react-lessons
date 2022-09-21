import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/cars.service";
import {DataCard} from "../DataCard";
import {Car} from "../Car";
import {CarForm} from "../CarForm";

function Cars() {
    const [cars, setCars] = useState([]);
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        carsService.getAll().then(res => setCars(res.data));
    }, []);

    const onUpdate = car => {
        setCurrent(car);
        document.location.href = document.location.origin + '#top';
    }

    const onDelete = car => {
        const deleteCar = async (car) => {
            let res = await carsService.deleteById(car.id);
            res = res.data;
            const index = cars.findIndex(value => value.id === car.id);
            cars.splice(index, 1);
            setCars(cars => [...cars]);

            return res;
        }

        return deleteCar(car);
    }

    const onSubmit = car => {
        const submitCar = async (car) => {
            let res;

            if(current && current.id) {
                car.id = current.id;
                res = await carsService.updateById(car.id, car);
                res = res.data;
                const index = cars.findIndex(value => value.id === car.id);
                cars.splice(index, 1, car);
                setCars(cars => [...cars]);
                setCurrent(null);
                setTimeout(() => window.location.href = document.location.origin + '/#car' + car.id, 100);
            } else {
                res = await carsService.create(car);
                res = res.data;
                setCars(cars => cars.concat(res));
                setTimeout(() => window.location.href = document.location.origin + '/#car' + res.id, 100);
            }

            return res;
        }

        return submitCar(car);
    }

    return (
        <DataCard>
            <CarForm car={current} onSubmit={onSubmit}/>
            {cars.map(val => <Car key={val.id} car={val} disabled={current && val.id === current.id} onUpdate={onUpdate} onDelete={onDelete}/>)}
        </DataCard>
    )
}

export { Cars }