import React from 'react';
import {DataCard, DataRow} from "../DataCard";

const UserInfo = ({user}) => {
    return (
        <DataCard header={user.name}>
            <DataRow caption="id">{user.id}</DataRow>
            <DataRow caption="name">{user.name}</DataRow>
            <DataRow caption="username">{user.username}</DataRow>
            <DataRow caption="email">{user.email}</DataRow>
            <DataRow caption="phone">{user.phone}</DataRow>
            <DataRow caption="website">{user.website}</DataRow>
            <DataRow header="address" caption="street">{user.address?.street}</DataRow>
            <DataRow caption="suite">{user.address?.suite}</DataRow>
            <DataRow caption="city">{user.address?.city}</DataRow>
            <DataRow caption="zipcode">{user.address?.zipcode}</DataRow>
            <DataRow header="geo" caption="lat">{user.address?.geo?.lat}</DataRow>
            <DataRow caption="lng">{user.address?.geo?.lng}</DataRow>
            <DataRow header="company" caption="name">{user.company?.name}</DataRow>
            <DataRow caption="catch phrase">{user.company?.catchPhrase}</DataRow>
            <DataRow caption="bs">{user.company?.bs}</DataRow>
        </DataCard>
    );
};

export {UserInfo}