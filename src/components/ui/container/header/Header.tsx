import h from './Header.module.css'
import React from "react";
import {UserProfile} from "../../user/User_Profile";
import {Title} from "./title/Title";

type HeaderProps = {
    id: number | null
}
export const Header: React.FC<HeaderProps> = ({id}) => {
    return (
        <div className={h.header}>
            {id ? <UserProfile/> : <Title/>}
        </div>
    );
};
