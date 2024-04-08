//Entity와 같은 거라고 생각
//.ts는 TypeScript 문법

export interface UserColumn{
    id? : string, // ? === Optional
    username? : string,
    password? : string,
    name? : string,
    phone? : string,
    job? : string
}