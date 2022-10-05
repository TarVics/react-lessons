import React from 'react';
import {Link} from "react-router-dom";

import css from "./Post.module.css";
import {DataCard, DataFooter, DataRow} from "../DataCard";

function Post({ id, title }) {

    return (
        <DataCard header={'Post #' + id}>
            <DataRow>{title}</DataRow>
            <DataFooter>
                <Link to={id.toString()}
                      className={css.LinkStyle}>Details...</Link>
            </DataFooter>
        </DataCard>
    );
}

export {Post}