import l from './Validation.module.css';
import {Navigate, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {AppStore, useAppDispatch} from "../../bll/reducers/store";
import {login} from "../../bll/reducers/login_reducer";
import {Input} from "../input/Input";
import {ErrorSnackbar} from "../error_snackbar/Error_Snackbar";

type FormikError = {
    email?: string;
    password?: string;
    password_repeat?: string;
};
export const Login = () => {
    const auth = useSelector<AppStore, boolean>(state => state.login.isAuth)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const navigateToRegister = () => {
        navigate('/register')
    }
    const formik = useFormik({
        validate: (values) => {
            const errors: FormikError = {};
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{1,4}$/.test(values.email)) {
                errors.email = 'Невалидный Email'
            }
            return errors;
        },
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        onSubmit: (values) => {
            dispatch(
                login({email: values.email, password: values.password, rememberMe: values.rememberMe})
            )
        }

    });

    if (auth) return <Navigate to={'/'}/>
    return (
        <div className={l.container}>
            <div className={l.wrapper}>
                <form onSubmit={formik.handleSubmit} className={l.form}>
                    <h2 className={l.label}>Вход используйте общие учетные данные тестовой учетной записи:<br/>

                        Электронная почта: free@samuraijs.com<br/>

                        Пароль: free</h2>
                    <Input
                        label={'Электронная почта'}
                        handleChange={formik.handleChange}
                        errors={formik.errors.email}
                        value={formik.values.email}
                        name={"email"}
                        type={'text'}
                        placeholder={'введите email'}
                        showEye={false}
                    />
                    <Input
                        label={'Пароль'}
                        handleChange={formik.handleChange}
                        errors={formik.errors.password}
                        value={formik.values.password}
                        name={"password"}
                        placeholder={'введите пароль'}
                        showEye
                    />
                    <div className={l.remember}><input type={'checkbox'}/> <span>Запомнить меня</span></div>
                    <button className={l.login} type="submit">Вход</button>
                </form>
                <button className={l.register} onClick={navigateToRegister} type="submit">Регистрация</button>
            </div>
            <ErrorSnackbar/>
        </div>
    );
};