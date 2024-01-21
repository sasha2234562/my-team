import i from "./Input.module.css";
import {ChangeEvent, useState} from "react";
import {Icon} from "../../../icon/Icon";

type InputProps = {
    label: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    errors: string | undefined;
    value: string;
    name: string;
    type?: string;
    placeholder: string
    showEye: boolean
}

export const Input = (props: InputProps) => {
    const [inputText, setInputText] = useState(false)
    const {
        label,
        handleChange,
        errors,
        value,
        name,
        type,
        placeholder,
        showEye
    } = props
    const clickIcon = () => {
        setInputText(!inputText)
    }
    return (
        <div className={i.inputContainer}>
            <span className={i.text}>{label}</span>
            <span className={i.inputWrapper}>
                <input className={i.input}
                       type={!type && !inputText ? 'password' : 'text'}
                       placeholder={placeholder}
                       name={name}
                       value={value}
                       onChange={handleChange}/>
                {showEye ? <span onClick={clickIcon} className={i.icon}>
                    <Icon IconId={'notEye'} width={'24'} height={'24'} viewBox={'0 0 24 24'}/>
                </span> : null}

            </span>
            <span className={i.error}>{errors}</span>
        </div>
    );
};
