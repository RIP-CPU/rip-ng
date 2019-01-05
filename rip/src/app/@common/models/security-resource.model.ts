export interface SecurityResourceModel {
    client_id: string;
    client_secret: string;
    grant_type: string;
    private_key?: string;
    aes_key?: string;
}