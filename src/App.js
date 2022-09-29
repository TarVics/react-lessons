import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layout";
import {AlbumsPage, CommentsPage, HomePage, NoPage, PostPage, TodosPage} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<PostPage/>}/>
                    </Route>
                    <Route path="*" element={<NoPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
