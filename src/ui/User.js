import UserCard from "./UserCard";
import UserRow from "./UserRow";

function User({user}) {
    return (
        <UserCard header={user.name}>
            <UserRow caption="id">{user.id}</UserRow>
            <UserRow caption="name">{user.name}</UserRow>
            <UserRow caption="username">{user.username}</UserRow>
            <UserRow caption="email">{user.email}</UserRow>
            <UserRow caption="phone">{user.phone}</UserRow>
            <UserRow caption="website">{user.website}</UserRow>
            <UserRow header="address" caption="street">{user.address?.street}</UserRow>
            <UserRow caption="suite">{user.address?.suite}</UserRow>
            <UserRow caption="city">{user.address?.city}</UserRow>
            <UserRow caption="zipcode">{user.address?.zipcode}</UserRow>
            <UserRow header="geo" caption="lat">{user.address?.geo?.lat}</UserRow>
            <UserRow caption="lng">{user.address?.geo?.lng}</UserRow>
            <UserRow header="company" caption="name">{user.company?.name}</UserRow>
            <UserRow caption="catch phrase">{user.company?.catchPhrase}</UserRow>
            <UserRow caption="bs">{user.company?.bs}</UserRow>
        </UserCard>
    );
}

export default User;