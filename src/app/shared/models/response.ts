export class Response<T> {
    public data: T;
    public errors: Array<string>;
    public error: Array<string>;

    constructor() {}
}
