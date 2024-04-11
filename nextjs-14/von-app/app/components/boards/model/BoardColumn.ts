import { IBoard } from "./board"

export interface BoardColumn{
    id? : number,
    articles? : number,
    boardName? : string,
    boardType? : string,
    postdate? : string,
    modDate? : string,
    json? : IBoard,
    array?: []
}