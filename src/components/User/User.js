import {DataRow} from "..";

function User({user}) {
    return (
        <DataRow>#{user.id}. {user.name}</DataRow>
    );
}

export { User }