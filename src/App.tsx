import './App.css'
import Router from "./router/Router";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStore, useAppDispatch} from "./components/bll/reducers/store";
import {updateCardCount} from "./screen_width/screen_width_control";
import {getTeam} from "./components/bll/reducers/team_reducer";
import {authMe} from "./components/bll/reducers/login_reducer";
import {Preloader} from "./components/ui/prelouder/Prelouder";


function App() {

  const dispatch = useAppDispatch()
  const [cardCount, setCardCount] = useState(0);
  const prelouder = useSelector<AppStore, boolean>(state => state.team.preloader)

  function updateCard() {
    updateCardCount(cardCount, setCardCount)
  }

  useEffect(() => {
    switch (cardCount) {
      case 4:
        dispatch(getTeam(4))
        break
      case 6:
        dispatch(getTeam(6))
        break
      case 8:
        dispatch(getTeam(8))
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
        {prelouder ? <Preloader/> : <Router/>}
      </div>
  )
}

export default App
