import e from './Exit.module.css'
import {Icon} from "../../../../../icon/Icon";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../bll/reducers/store";
import {logOutMe} from "../../../../bll/reducers/login_reducer";

export const Exit = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const exitHandler = () => {
        navigate('/login')
        dispatch(logOutMe())
    }
    return (
        <div className={e.exit}>
            <button onClick={exitHandler}>
                <span className={e.icon}><Icon IconId={'exit'} viewBox={'0 0 40 40'} height={'40'} width={'40'}/></span>
                <span className={e.title}>Выход</span>
            </button>
        </div>
    );
};
