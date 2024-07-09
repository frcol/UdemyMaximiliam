import { Component } from '@angular/core';
import { UserTestComponent } from "../user/user.component";
import { ShowDetails } from "../showDetails/showDetails.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    imports: [UserTestComponent, ShowDetails]
})

export class ParentComponent {
  users: any[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 40 }
  ];

  selectedUser: any = this.users[0];

  onSelected(user: any) {
    this.selectedUser = user;
    console.log('ParentComponent', this.selectedUser);
  }
}
