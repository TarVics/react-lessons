import {useDispatch} from "react-redux";

import {carsActions} from "../../redux";

const Car = ({car, setCars}) => {
    const {id, model, price, year, photo} = car;
    const dispatch = useDispatch();

    const sendPhoto = async (e) => {
        const [file] = e.target.files;
        dispatch(carsActions.attachPhoto({car, file}));
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            {
                photo?
                    <img src={photo} alt={model}/>
                    :
                    <input type="file" onChange={sendPhoto}/>

            }
        </div>
    );
};

export {Car};
