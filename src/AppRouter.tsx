import {Route, Routes} from "react-router-dom";
import {routes} from "./consts/routes.ts";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route Component={route.component} path={route.path} key={route.path}/>
            ))}
        </Routes>
    );
};

export default AppRouter;