import {FC, PropsWithChildren} from "react";

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>;

export const hasLength = <T extends any>(value?: Array<T> | string): boolean =>
    !!value?.length;


export type Item = {
    text: string,
    commentsCount: number
    comments?: Comment[]
}

export type Comment = {
    color: string,
    description: string
}
