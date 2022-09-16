import React, {useEffect, useState} from 'react';

import {getLaunches} from "../ds/spacexdata.axios";
import DataCard from "./DataCard";

function SpaceXLaunches() {
    const [launches, setLaunches] = useState([]);

    useEffect(
        () => {
            document.body.classList.add('cursor-progress');
            getLaunches()
                .then(res => setLaunches(res.data))
                .finally(() => document.body.classList.remove('cursor-progress'));
        }, []
    )
    return (
        <>
            <h1 style={{textAlign:'center'}}>SpaceX Launches</h1>
            <div className="layout">
                {launches.map((launch, index) => (
                    <DataCard header={`${launch.mission_name} (${launch.launch_year})`} key={index}>
                        <img src={launch.links.mission_patch_small} alt={`${launch.mission_name} (${launch.launch_year})`}/>
                    </DataCard>
                ))}
            </div>
        </>
    );
}

export default SpaceXLaunches;