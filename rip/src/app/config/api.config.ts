import { APIModel } from "../@common/models/api.model";
import { HttpMethod } from "../@common/models/http-base.model";

export const API: APIModel = {
    auth: {
        token: {
            protocol: "http",
            host: "localhost",
            port: 8085,
            method: HttpMethod.POST,
            path: "/oauth/token"
        }
    },
    master: {
        test: {
            protocol: "http",
            host: "localhost",
            method: HttpMethod.POST,
            path: ""
        }
    },
    sample: {
        get: {
            protocol: "http",
            host: "localhost",
            port: 69,
            path: "/assets/json/data.json",
            method: HttpMethod.GET
        },
        post: {
            protocol: "http",
            host: "10.10.123.132",
            port: 8080,
            path: "/http-post",
            method: HttpMethod.POST
        },
        upload: {
            protocol: "http",
            host: "10.10.123.132",
            port: 8080,
            path: "/upload",
            method: HttpMethod.POST
        }
    }
}