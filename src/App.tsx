import Navbar from "./components/navbar/Navbar.tsx";
import AppRouter from "./AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <Navbar/>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </>
    )
}

export default App
