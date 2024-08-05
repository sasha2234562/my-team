import {Navigate} from "react-router-dom";
import {useAppDispatch} from "../../../bll/reducers/store";
import {getPaginator} from "../../../bll/reducers/team_reducer";
import {Header} from "../header/Header";
import {Cards} from "../../cards/Cards";
import {Paginator} from "../../paginator/Paginator";
import {Preloader} from "../../prelouder/Prelouder";
import {useAppSelector} from "../../../bll/reducers/hook";
import {teamSelector} from "../../../bll/reducers/selectors/team_selector";
import {isAuthSelector} from "../../../bll/reducers/selectors/login_selector";
import {userSelector} from "../../../bll/reducers/selectors/user_selector";

export const Content = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(userSelector)
    const team = useAppSelector(teamSelector)
    const isAuth = useAppSelector(isAuthSelector)

    const onPageChanged = (page: number) => {
        dispatch(getPaginator(page))
    }

    if (!isAuth) return <Navigate to={'login'}/>

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