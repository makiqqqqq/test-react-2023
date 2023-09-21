import React from 'react';
import {ModalProps} from "./types";
import { FCWithChildren } from '../../utils/types';
import './Modal.css'
import Typography from '../Typography';


const Modal:FCWithChildren<ModalProps> = ({title,children}) => {

    return (
        <div className="wrapper">
           <div className="wrapper-title">
               <Typography tag="h1" className="title" >
                   {title}
               </Typography>
           </div>
            {children}
        </div>
    );
};

export default Modal;
