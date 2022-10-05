import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {CommentsPage, NoPage, PostPage, PostsPage, UsersPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostPage/>}/>
                </Route>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':id'} element={<PostPage/>}/>
                </Route>
                <Route path={'*'} element={<NoPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
