import React from "react";
import iconsSprite from "../assets/icon.svg";

type IconProps = {
    IconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string
};

export const Icon: React.FC<IconProps> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox={props.viewBox}
            fill={props.fill || "none"}
        >
            <use xlinkHref={`${iconsSprite}#${props.IconId}`}/>
        </svg>
    );
};
