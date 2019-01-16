import { ErrorHandler, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from './notification.service';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor(private notification: NotificationService) {}

  handleError(error: Error) {
    if (error.message.includes('No loader found for file')) {
        this.notification.show('DICOM', 'File not support', NbToastStatus.DANGER);
        return Observable.empty;
    } else if ( error.message.includes('mousedown')     || error.message.includes('mousemove') ||
                error.message.includes('mouseup')       || error.message.includes('mouseout') ||
                error.message.includes('mousewheel')    || error.message.includes('DOMMouseScroll') ||
                error.message.includes('dblclick')      || error.message.includes('touchstart') ||
                error.message.includes('touchmove')     || error.message.includes('touchend')) {
        return Observable.empty;
    } else
        throw error;
  }

}
