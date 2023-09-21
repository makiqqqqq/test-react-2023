export type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TextTags = keyof Pick<JSX.IntrinsicElements, TagVariants>

export type TypographyProps = {
    tag?: TagVariants
    className?: string
}