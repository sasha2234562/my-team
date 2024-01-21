import e from "./Error_Snackbar.module.css"
import React from "react";

type Error = {
    error: string
}

export const ErrorSnackbar: React.FC<Error> = ({error}) => {

    return (
        <span className={e.error}>{error}</span>
    );
};
