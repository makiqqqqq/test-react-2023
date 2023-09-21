import React, {FC} from 'react';
import {ButtonProps} from "./types";
import Typography from '../Typography';
import './Button.css'


const Button: FC<ButtonProps> = ({title, ...buttonProps}) => {

    const defaultClassName = buttonProps.className ? `button ${buttonProps.className}` : 'button';

    return (
        <button {...buttonProps} className={defaultClassName}>
            <Typography tag="p">
                {title}
            </Typography>
        </button>
    );
};

export default Button;
