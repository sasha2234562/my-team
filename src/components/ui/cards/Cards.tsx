import c from './Cards.module.css'
import React from "react";
import {UserInfo} from "../user/User_Info";
import {Card} from "./card/Card";

type CardsType = {
    id?: number | null
}
export const Cards: React.FC<CardsType> = ({id}) => {
    return (
        <>
            {id ? <UserInfo/>
                :
                <div className={c.cards}>
                    <Card/>
                </div>
            }
        </>
    );
};
