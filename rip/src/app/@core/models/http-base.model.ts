export interface HttpBaseModel {
    protocol: string;
    host: string;
    port?: number | null;
    path?: string;
    method?: HttpMethod;
}

export enum HttpMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
