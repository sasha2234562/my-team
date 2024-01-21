import p from "./Prelouder.module.css"

export const Preloader = () => {

    return (
        <div className={p.mkSpinnerWrap}>
            <div className={p.mkSpinnerPie}></div>
        </div>
    )
}