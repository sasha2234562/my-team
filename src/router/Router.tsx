import {Route, Routes} from "react-router-dom";
import {Content} from "../components/ui/container/content/Content";
import {Login} from "../components/ui/validation/Login";


export const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Content/>}/>
            <Route path={"login"} element={<Login/>}/>
        </Routes>
    );
};

export default Router;