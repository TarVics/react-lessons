import React, {useEffect, useState} from 'react';

import {DataCard} from "..";
import {spacexService} from "../../services";

function SpaceXLaunches() {
    const [launches, setLaunches] = useState([]);

    useEffect(
        () => {
            document.body.classList.add('cursor-progress');
            spacexService.getLaunches()
                .then(res => setLaunches(res.data))
                .finally(() => document.body.classList.remove('cursor-progress'));
        }, []
    )
    return (
        <>
            <h1 style={{textAlign:'center'}}>SpaceX Launches</h1>
            {!launches.length && <h2 style={{textAlign:'center'}}>Loading data...</h2>}
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

export { SpaceXLaunches }