import React, {useReducer} from 'react';

import {PetsList, DataLayout, PetsForm} from "..";

const reduceInitValue = {cats: [], dogs: []};
const reduceInitState = state => state;

const reduceDispatch = (state, action) => {

    const data = state[action.type];
    if (!data) return state;

    switch (action.op) {
        case 'ADD':
            return {...state, [action.type]: data.concat(action.payload)}
        case 'DELETE':
            return {...state, [action.type]: data.filter(value => value !== action.payload)}
        default:
            return state;
    }
}

const Pets = () => {
    const [pets, dispatch] = useReducer(reduceDispatch, reduceInitValue, reduceInitState);
    return (
        <DataLayout width={2} columns={2}>
            <PetsForm label={"Add Cat"} onValue={payload => dispatch({type: 'cats', op: 'ADD', payload})}/>
            <PetsForm label={"Add Dog"} onValue={payload => dispatch({type: 'dogs', op: 'ADD', payload})}/>
            <PetsList items={pets.cats} onDelete={payload => dispatch({type: 'cats', op: 'DELETE', payload})}/>
            <PetsList items={pets.dogs} onDelete={payload => dispatch({type: 'dogs', op: 'DELETE', payload})}/>
        </DataLayout>
    );
};


export {Pets}