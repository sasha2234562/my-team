import './App.css'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStore, useAppDispatch} from "./components/bll/reducers/store";
import {updateCardCount} from "./screen_width/screen_width_control";
import {getTeam} from "./components/bll/reducers/team_reducer";
import {authMe} from "./components/bll/reducers/login_reducer";
import {Preloader} from "./components/ui/prelouder/Prelouder";
import Router from "./router/Router";
import {setPage} from "./components/bll/local_storage/local_storage";
import {InitialUserState} from "./components/bll/reducers/types_reducers";


function App() {

    const dispatch = useAppDispatch()
    const [cardCount, setCardCount] = useState(0);
    const {preloader, currentPage} = useSelector<AppStore, InitialUserState>(state => state.team)

    function updateCard() {
        updateCardCount(cardCount, setCardCount)
    }

    useEffect(() => {
        switch (cardCount) {
            case 4:
                dispatch(getTeam(currentPage, 4))
                setPage(4)
                break
            case 6:
                dispatch(getTeam(currentPage, 6))
                setPage(6)
                break
            case 8:
                dispatch(getTeam(currentPage, 8))
                setPage(8)
                break
        }
    }, [cardCount]);

    useEffect(() => {
        dispatch(authMe())
        // Обработчик изменения размера экрана будет вызываться при изменении ширины окна
        window.addEventListener('resize', updateCard);

        // Очистка обработчика при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateCard);
        };
    }, []);

    return (
        < div className={"app"}>
            {preloader ? <Preloader/> : <Router/>}
        </div>
    )
}

export default App
