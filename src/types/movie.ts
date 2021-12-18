export interface MoviesType {
    id: string | number;
    title: string;
    image: string;
    description: string;
    isFavourite: boolean;
    author: string;
    title_long?: string;
}
