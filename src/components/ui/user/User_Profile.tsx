import u from "./User_Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Icon} from "../../../icon/Icon";
import {Exit} from "../container/header/exit/Exit";
import i from "../../../assets/programmer-mascot-logo-design-vector-46471076 (1).jpg"
import {AppStore} from "../../bll/reducers/store";
import {Users} from "../../bll/reducers/types_reducers";
import {back} from "../../bll/reducers/user_reducer";

export const UserProfile = () => {
    const user = useSelector<AppStore, Users>(state => state.user)
    const dispatch = useDispatch()
    const backClick = () => {
        dispatch(back())
    }
    return (
        <div>
            <div className={u.back}>
                <button onClick={backClick}>
                    <span className={u.icon}><Icon IconId={'back'} width={'40'} height={'40'}
                                                   viewBox={'0 0 40 40'}/></span>
                    <span className={u.title}>Назад</span>
                </button>
            </div>
            <div className={u.content}>
                <img className={u.avatar} src={user.photos.large ? user.photos.large : i} alt=""/>
                <div className={u.label}>
                    <h1 className={u.name}>{user.name}</h1>
                    <h2 className={u.post}>Партнёр</h2>
                </div>
            </div>
            <Exit/>
        </div>
    );
};
