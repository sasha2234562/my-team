import './App.css'
import {useEffect} from "react";
import {useAppDispatch} from "./components/bll/reducers/store";
import {getTeam} from "./components/bll/reducers/team_reducer";
import {Preloader} from "./components/ui/prelouder/Prelouder";
import {Router} from "./router/Router";
import {authMe} from "./components/bll/reducers/login_reducer";
import {useAppSelector} from "./components/bll/reducers/hook";
import {isAuthSelector} from "./components/bll/reducers/selectors/login_selector";
import {currentPageSelector, preloaderSelector} from "./components/bll/reducers/selectors/team_selector";


function App() {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(currentPageSelector)
    const preloader = useAppSelector(preloaderSelector)
    const isAuth = useAppSelector(isAuthSelector)

    useEffect(() => {
        dispatch(authMe());
        if(isAuth){
            dispatch(getTeam(currentPage, 8))
        }
    }, [isAuth]);

    return (
        < div className={"app"}>
            {preloader ? <Preloader/> : <Router/>}
        </div>
    )
}

export default App
