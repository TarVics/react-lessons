import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {jsonPlaceholderService} from "../../services";
import {DataLayout, TodoItem} from "../../components";

function TodosPage() {
    const location = useLocation();
    const { state: users } = location;
    const [todos, setTodos] = useState([]);

    useEffect( () => {
        const load = async() => {
            const dUsers = users || await jsonPlaceholderService.getUsers();
            const dTodos = await jsonPlaceholderService.getTodos();

            setTodos(value => dTodos.map(item => ({...item, user: dUsers[item.user.id]})));
        }

        load();
    }, [users]);

    return (
        <DataLayout width="4" columns="2" padding={'40px 0'}>
            {todos.map((value, index) => <TodoItem key={index} {...value}/>)}
        </DataLayout>
    );
}

export {TodosPage}