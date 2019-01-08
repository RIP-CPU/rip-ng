import { HttpBaseModel } from './http-base.model';

export interface APIModel {
    [name: string]: {
        [name: string]: HttpBaseModel,
    };
}
