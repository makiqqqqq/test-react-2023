import React, {FC} from 'react';
import Button from '../Button';
import {ModalItemProps} from './types'
import Typography from '../Typography';
import './ModalItem.css'

const ModalItem: FC<ModalItemProps> = ({record, index, handleDeleteItem, activeItemIndex, handleGetItemIndex}) => {
    const isActiveItem = activeItemIndex === index
    const handleDelete = () => {
        handleDeleteItem(record);
    }
    const handleClick = () => {
        handleGetItemIndex(index);
    }

    const wrapperClassname = isActiveItem ? "wrapper-modal-item active" : "wrapper-modal-item"

    return (
        <li>
            <div className={wrapperClassname} style={{borderLeft: isActiveItem ? '1px solid red' : ''}}
                 onClick={handleClick}>
                <div className="flex-container flex-gap">
                    <Typography>{record.text}</Typography>
                    <div className="flex-container flex-gap">
                        <Typography>{record.comments?.length ?? 0}</Typography>
                        <Button className="delete-btn" onClick={handleDelete} title="Delete"/>
                    </div>
                </div>
            </div>
        </li>

    );
};

export default ModalItem;
