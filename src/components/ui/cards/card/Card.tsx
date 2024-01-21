import c from './Card.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../bll/reducers/store";
import {liked} from "../../../bll/reducers/team_reducer";
import {userCreator} from "../../../bll/reducers/user_reducer";
import a from "../../../../assets/programmer-mascot-logo-design-vector-46471076 (1).jpg"
import {Users} from "../../../bll/reducers/types_reducers";
import {Icon} from "../../../../icon/Icon";

export const Card = () => {
    const team = useSelector<AppStore, Users[]>(store => store.team.items)
    const dispatch = useDispatch()
    const userHandler = (user: Users, e: React.MouseEvent<HTMLButtonElement>) => {
        const clickedElement = e.target as HTMLDivElement;
        if (clickedElement.classList.contains(c.card)
            || clickedElement.classList.contains(c.avatar)
            || clickedElement.classList.contains(c.name)
            && !clickedElement.classList.contains(c.icon)) {
            dispatch(userCreator(user))
        }
    }
    const like = (id: number | null, like: boolean) => {
        dispatch(liked(id, !like))
    }
    return (
        <>
            {team.map(i => {
                return (
                    <button className={c.button} key={i.id} onClick={(e) => userHandler(i, e)}>
                        <div className={c.card}>
                            <img className={c.avatar} src={(!i.photos.large) ? a : i.photos.large} alt={'avatar'}/>
                            <h2 className={c.name}>{i.name}</h2>
                            <span className={c.icon} onClick={() => like(i.id, i.like)}>
                            <Icon IconId={'dislike'} height={'12'} width={'14'} viewBox={'0 0 16 14'}
                                  fill={i.like ? '#512689' : 'none'}/>
                        </span>
                        </div>
                    </button>
                )
            })}
        </>
    )
};
