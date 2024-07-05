import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TestComponent } from "./components/test/test.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TestComponent]
})

export class AppComponent {
  title = 'UdemyMaximiliam';

  users = DUMMY_USERS;
}
