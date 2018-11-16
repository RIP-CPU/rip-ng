import { APIModel } from "../@common/models/api.model";

export const API: APIModel = {
    auth: {
        token: {
            protocol: "https",
            host: "118.97.82.222",
            method: "POST",
            path: "/telkomsigma-security/oauth/token"
        }
    },
    master: {
        test: {
            protocol: "http",
            host: "localhost",
            path: ""
        }
    },
    sample: {
        get: {
            protocol: "http",
            host: "localhost",
            path: "/assets/json/data.json",
            port: 69
        },
        post: {
            protocol: "http",
            host: "10.10.123.132",
            path: "/http-post",
            method: "POST",
            port: 8080
        },
        upload: {
            protocol: "http",
            host: "10.10.123.132",
            path: "/upload",
            method: "POST",
            port: 8080
        }
    }
}