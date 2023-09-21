import {TagVariants} from "./types";

const styles: Record<TagVariants, string> = {
    'h1': 'h1',
    'h2': 'h2',
    'h3': 'h3',
    'h4': 'h4',
    'h5': 'h5',
    'h6': 'h6',
    'p': 'body1',
}

export const getFontSize = (tags: TagVariants, fallback = 'body1') => styles[tags] ?? fallback
