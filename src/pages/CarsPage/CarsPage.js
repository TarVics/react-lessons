import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {carsActions} from "../../redux";
import {CarForm, Cars} from "../../components";

const CarsPage = () => {
    const dispatch = useDispatch();
    const {items: cars, prev, next, error, loading} = useSelector(state => state.carsReducer);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carsActions.getAll(query.get('page')));
    }, [query, dispatch]);

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }
    const onCreateCar = car => {
        dispatch(carsActions.create(car));
        // carsService.create(car).then(() => {
        //     setQuery(value => ({page: value.get('page')}));
        // });
    }

    return (
        <div>
            <CarForm onSubmit={onCreateCar}/>
            <hr/>
            {loading && <h1>Loading data...</h1>}
            {error && <h1>{error.toString()}</h1>}
            <Cars cars={cars} />
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {CarsPage};
