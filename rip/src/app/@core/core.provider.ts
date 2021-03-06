import { InjectionToken } from '@angular/core';
import { HttpFactoryService } from './utils/http-factory.service';

export const HTTP_SERVICE: InjectionToken<HttpFactoryService> =
new InjectionToken<HttpFactoryService>('Http Service');
