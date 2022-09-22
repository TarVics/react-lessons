import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {DataCard} from "../DataCard";
import {Car} from "../Car";
import {CarForm} from "../CarForm";

function Cars() {
    const [cars, setCars] = useState([]);
    const [current, setCurrent] = useState({edit: false, car: null});

    useEffect(() => {
       carsService.getAll().then(({ data }) => setCars(data));
    }, []);

    useEffect(() => {

        if (current.edit) {
            document.body.scrollIntoView({ behavior: "smooth" });
        } else if (current.car) {
            document.getElementById('car' + current.car.id).scrollIntoView({ behavior: "smooth" } );
        }

    }, [current]);

    const onUpdate = car => {
        setCurrent({ edit: true, car });
    }

    const onDelete = car => {

        const deleteCar = async (car) => {
            const { data } = await carsService.deleteById(car.id);
            cars.splice(cars.findIndex(value => value.id === car.id), 1);
            setCars(cars => [...cars]);
            return data;
        }

        return deleteCar(car);
    }

    const onSubmit = car => {

        const submitCar = async (car) => {
            //console.log(car === current.car);

            if (current.edit) {
                const { data } = await carsService.updateById(car.id, car);
                Object.assign(car, data);
                setCars(cars => [...cars]);
            } else {
                const { data } = await carsService.create(car);
                Object.assign(car, data);
                setCars(cars => cars.concat(car));
            }

            setCurrent({ edit: false, car });
            return car;
        }

        return submitCar(car);
    }

    return (
        <DataCard>
            <CarForm car={ current.edit && current.car } onSubmit={ onSubmit }/>
            {cars.map(val =>
                <Car key={val.id}
                     car={val}
                     disabled={ current.edit && val.id === current.car.id}
                     onUpdate={ onUpdate}
                     onDelete={ onDelete}/>)}
        </DataCard>
    )
}

export { Cars }