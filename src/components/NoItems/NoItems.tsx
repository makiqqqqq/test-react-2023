import React, {FC} from 'react';
import {NoItemsProps} from "./types";
import Typography from '../Typography';
import './NoItems.css'


const NoItems: FC<NoItemsProps> = ({description}) => {

    const textError = <Typography className="text">{`Oooops, no ${description}...`}</Typography>

    return (
        <div className="no-items-block">
            {textError}
        </div>
    );
};

export default NoItems;
