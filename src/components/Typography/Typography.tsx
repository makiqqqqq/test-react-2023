import React from 'react';
import {getFontSize} from "./utils";
import {FCWithChildren} from '../../utils/types';
import {TextTags, TypographyProps} from "./types";


const Typography: FCWithChildren<TypographyProps> = ({tag= 'p', className = '', children}) => {

    const Tag = tag as TextTags
    const fontSize = getFontSize(tag)
    const combinedClasses = className ? `${fontSize} ${className}` : fontSize;

    return (
        <Tag className={combinedClasses}>
            {children}
        </Tag>
    );
};

export default Typography;
