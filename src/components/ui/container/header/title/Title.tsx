import t from './Title.module.css'
import {Exit} from "../exit/Exit";

export const Title = () => {
    return (
        <div className={t.wrapper}>
            <h1 className={t.caption}>Наша команда</h1>
            <h2 className={t.text}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
                плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
            </h2>
            <Exit/>
        </div>
    );
};
