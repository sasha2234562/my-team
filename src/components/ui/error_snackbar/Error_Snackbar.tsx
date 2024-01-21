import {useSelector} from "react-redux";
import e from "./Error_Snackbar.module.css"
import {AppStore} from "../../bll/reducers/store";

export const ErrorSnackbar = () => {

    const err = useSelector<AppStore, string | undefined>(store => store.login.email)


    return (
        <span className={e.error}>{err}</span>
    );
};
