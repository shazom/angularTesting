export const enum ResultCodes {
    Success,
    Error
}

export class Result {
    rc: number;
    data?: any
}