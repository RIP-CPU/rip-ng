import { APIModel } from "../@common/models/api.model";
import { HttpMethod } from "../@common/models/http-base.model";

export const API: APIModel = {
    auth: {
        token: {
            protocol: "https",
            host: "118.97.82.222",
            method: HttpMethod.POST,
            path: "/telkomsigma-security/oauth/token"
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
            path: "/assets/json/data.json",
            method: HttpMethod.GET,
            port: 69
        },
        post: {
            protocol: "http",
            host: "10.10.123.132",
            path: "/http-post",
            method: HttpMethod.POST,
            port: 8080
        },
        upload: {
            protocol: "http",
            host: "10.10.123.132",
            path: "/upload",
            method: HttpMethod.POST,
            port: 8080
        }
    }
}