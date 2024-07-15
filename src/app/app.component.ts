import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { UserTestComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { ParentComponent } from "./components/parent/parent.component";
import { User } from './user/user.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, ParentComponent, UserTestComponent]
})

export class AppComponent {
  title = 'UdemyMaximiliam';

  users = DUMMY_USERS;
  selectedUser: User = {id:''} as User;

  onSelected(user: User) {
    this.selectedUser = user;
  }
}
