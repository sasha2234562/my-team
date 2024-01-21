import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStore, useAppDispatch} from "../../../bll/reducers/store";
import {InitialUserState, Users} from "../../../bll/reducers/types_reducers";
import {getPaginator} from "../../../bll/reducers/team_reducer";
import {Header} from "../header/Header";
import {Cards} from "../../cards/Cards";
import {Paginator} from "../../paginator/Paginator";
import {Preloader} from "../../prelouder/Prelouder";

export const Content = () => {
    const dispatch = useAppDispatch()
    const user = useSelector<AppStore, Users>(state => state.user)
    const team = useSelector<AppStore, InitialUserState>(state => state.team)
    const auth = useSelector<AppStore, boolean>(state => state.login.isAuth)

    const onPageChanged = (page: number) => {
        dispatch(getPaginator(page))
    }

    if (!auth) return <Navigate to={'login'}/>

    return (
        <>
            <Header id={user.id}/>
            {!team.preloader ?
                <><Cards id={user.id}/>
                    {!user.id ?
                        <Paginator
                            totalUsersCount={team.totalCount}
                            pageSize={team.pageSize}
                            currentPage={team.currentPage}
                            onPageChanged={onPageChanged}/>
                        : null} </>
                :
                <Preloader/>
            }
        </>
    )
};