import React from 'react';

import css from "./PetsList.module.css";
import {DataCard, DataRow} from "../DataCard";

const PetsList = ({items, onDelete}) => {

    const onClick = value => {
        onDelete && onDelete(value);
    }

    return (
        <DataCard>
            {items && items.map((item, index) =>
                <div  className={css.PetsList} key={index}>
                    {item}
                    <button onClick={() => onClick(item)}>Delete</button>
                </div>
            )}
        </DataCard>
    );
};

export {PetsList}