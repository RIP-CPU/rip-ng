export interface HttpBaseModel {
    protocol: string;
    host: string;
    port?: number | null;
    path?: string;
    method?: string | 'GET';
}