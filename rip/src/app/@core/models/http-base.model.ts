export interface HttpBaseModel {
    protocol: string;
    host: string;
    port?: number | null;
    path?: string;
    method?: HttpMethod;
    file?: FileModel;
}

export interface FileModel {
    filename: string;
    extension: string;
}

export enum HttpMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
