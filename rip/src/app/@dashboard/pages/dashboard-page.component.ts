import { Component } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {

  public selected: any[] = [];
  public rows: any[] = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  public columns: any[] = [
    { prop: 'name', name: 'Name' },
    { prop: 'gender', name: 'Gender' },
    { prop: 'company', name: 'Company' },
  ];
  public selectionType: SelectionType = SelectionType.checkbox;

  onSelect(selected) {
  }

  onEdit(data) {
  }

}
