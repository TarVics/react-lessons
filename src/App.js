import {Navigate, Route, Routes} from "react-router-dom";

import {HomePage, LoginPage, LogoutPage, PrivatePage} from "./pages";
import {MainLayout} from "./layout";
import {RequireAuth} from "./hooks";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'logout'} element={<LogoutPage/>}/>
                <Route path={'private'} element={
                    <RequireAuth>
                        <PrivatePage/>
                    </RequireAuth>
                }/>
            </Route>
        </Routes>
    );
}

export default App;
