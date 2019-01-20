import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { SelectionType, ColumnMode, SortType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'rip-table',
  templateUrl: './rip-datatable.component.html',
  styleUrls: ['./rip-datatable.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RipDatatableComponent {

  @Output() public select: EventEmitter<any> = new EventEmitter();
  @Output() public sort: EventEmitter<any> = new EventEmitter();
  @Output() public page: EventEmitter<any> = new EventEmitter();
  @Output() public reorder: EventEmitter<any> = new EventEmitter();
  @Output() public resize: EventEmitter<any> = new EventEmitter();
  @Output() public edit: EventEmitter<any> = new EventEmitter();
  @Input() public columns: any[] = [];
  @Input() public loadingIndicator: boolean = false;
  @Input() public selected: any[] = [];
  @Input() public selectionType: SelectionType = SelectionType.single;
  @Input() public columnMode: ColumnMode = ColumnMode.force;
  @Input() public sortType: SortType = SortType.single;
  @Input() public scrollbarV: boolean = false;
  @Input() public scrollbarH: boolean = false;
  @Input() public rowHeight: any = 'auto';
  @Input() public externalPaging: boolean = false;
  @Input() public externalSorting: boolean = false;
  @Input() public reorderable: boolean = true;
  @Input() public checkbox: boolean = false;
  @Input() public selectAllRowsOnPage: boolean = false;
  @Input() public cssClasses: any = {
    sortAscending: 'datatable-icon-up',
    sortDescending: 'datatable-icon-down',
    pagerLeftArrow: 'datatable-icon-left',
    pagerRightArrow: 'datatable-icon-right',
    pagerPrevious: 'datatable-icon-prev',
    pagerNext: 'datatable-icon-skip',
  };
  @Input() public rowClass: any;
  @Input() public set rows(val: any[]) {
    this.rowsVar = val;
  }
  @Input() public set limit(val: number) {
    this.limitVar = val;
  }
  @Input() public set count(val: number) {
    this.countVar = val;
  }
  @Input() public set offset(val: number) {
    this.offsetVar = val;
  }
  @Input() public messages: any = {
    emptyMessage: 'No data to display',
    totalMessage: 'total',
    selectedMessage: 'selected',
  };
  public rowsVar: any[] = [];
  public limitVar: number = 10;
  public countVar: number = 0;
  public offsetVar: number = 0;

  onActivate(event) {
    if(event.type === 'dblclick') {
      this.edit.emit(event.row);
    }
  }

  onSelect({ selected }) {
    this.select.emit(selected);
  }

  onSort({ sort }) {
    this.sort.emit(sort);
  }

  onPage({ page }) {
    this.page.emit(page);
  }

  onReorder({ reorder }) {
    this.reorder.emit(reorder);
  }

}
