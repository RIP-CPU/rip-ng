import { APIModel } from '../@core/models/api.model';
import { HttpMethod } from '../@core/models/http-base.model';

export const API: APIModel = {
    auth: {
        token: {
            protocol: 'http',
            host: 'localhost',
            port: 8085,
            method: HttpMethod.POST,
            path: '/oauth/token',
        },
    },
    master: {
        test: {
            protocol: 'http',
            host: 'localhost',
            method: HttpMethod.POST,
            path: '',
        },
    },
    pacs: {
        sample: {
            protocol: 'https',
            host: 'raw.githubusercontent.com',
            method: HttpMethod.GET,
            path: '/RIP-CPU/rip-pacs/master/data/sample.zip',
            file: {
                filename : 'sample',
                extension : '.zip',
            },
        },
    },
    sample: {
        get: {
            protocol: 'http',
            host: 'localhost',
            port: 69,
            path: '/assets/json/data.json',
            method: HttpMethod.GET,
        },
        post: {
            protocol: 'http',
            host: '10.10.123.132',
            port: 8080,
            path: '/http-post',
            method: HttpMethod.POST,
        },
        upload: {
            protocol: 'http',
            host: '10.10.123.132',
            port: 8080,
            path: '/upload',
            method: HttpMethod.POST,
        },
    },
};
