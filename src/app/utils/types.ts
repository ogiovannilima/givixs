export interface ArticleProps {
    id?: number
    title: string
    description: string
    tag: string[]
}

export interface ScrollTarget {
    idToGo: string
}