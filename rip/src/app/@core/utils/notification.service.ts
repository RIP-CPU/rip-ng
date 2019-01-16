import { Injectable} from '@angular/core';
import { NbToastrService, NbGlobalPosition, NbGlobalLogicalPosition } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';

@Injectable()
export class NotificationService {

  constructor(private toastrService: NbToastrService) {}

  private destroyByClick: boolean = true;
  private duration: number = 3000;
  private hasIcon: boolean = true;
  private position: NbGlobalPosition = NbGlobalLogicalPosition.BOTTOM_END;
  private type: NbToastStatus = NbToastStatus.DEFAULT;
  private preventDuplicates: boolean = false;

  show( title: string,
        message: string,
        type?: NbToastStatus,
        position?: NbGlobalPosition,
        duration?: number,
        hasIcon?: boolean,
        preventDuplicates?: boolean,
        destroyByClick?: boolean) {
    const config = {
      status: type ? type : this.type,
      destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
      duration: duration ? duration : this.duration,
      hasIcon: hasIcon ? hasIcon : this.hasIcon,
      position: position ? position : this.position,
      preventDuplicates: preventDuplicates ? preventDuplicates : this.preventDuplicates,
    };
    this.toastrService.show(message, title, config);
  }

}
