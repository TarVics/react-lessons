import {DataCard, DataRow} from "../DataCard";

function TodoItem({ user, completed, uncompleted }) {

    return (
        <DataCard header={user?.name}>
            <DataRow caption={"user"}>{user?.name}</DataRow>
            <DataRow caption={"email"}>{user?.email}</DataRow>

            {uncompleted.length && <DataRow header={"uncompleted"}/> }
            {uncompleted.map(val => <DataRow key={val.id} caption={"#" + val.id}><span style={{color: 'red'}}>{val.title}</span></DataRow>)}

            {completed.length && <DataRow header={"completed"}/> }
            {completed.map(val => <DataRow key={val.id} caption={"#" + val.id}>{val.title}</DataRow>)}
        </DataCard>
    )
}

export {TodoItem}