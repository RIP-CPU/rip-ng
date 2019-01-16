import { ModuleWithProviders, NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { HTTP_SERVICE } from './core.provider';
import { HttpCommonService } from './utils/http-common.service';
import { HttpInterceptorService } from './utils/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomPreloadingStrategy } from './utils/preloading-strategy.service';
import { ErrorHandlerService } from './utils/error-handler.service';
import { NotificationService } from './utils/notification.service';

export const SAMPLE_PROVIDERS = [
  ...DataModule.forRoot().providers,
];
export const core_providers = [
  { provide: HTTP_SERVICE, useClass: HttpCommonService},
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  { provide: ErrorHandler, useClass: ErrorHandlerService},
  CustomPreloadingStrategy,
  NotificationService,
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...core_providers,
        ...SAMPLE_PROVIDERS,
      ],
    };
  }
}
