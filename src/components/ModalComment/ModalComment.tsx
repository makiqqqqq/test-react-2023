import React, {FC} from 'react';
import Typography from '../Typography';
import {ModalCommentProps} from "./types";
import './ModalComment.css'

const ModalComment: FC<ModalCommentProps> = ({color, description}) => {

    return (
        <li>
            <div className="wrapper-modal-item">
                <div className="container">
                    <div className="wrapper-color" style={{background: color ?? "black"}}></div>
                    <Typography>
                        {description}
                    </Typography>
                </div>
            </div>
        </li>
    );
};

export default ModalComment;
