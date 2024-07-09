import { Component, computed, EventEmitter, Input, Output} from '@angular/core';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input() user!: User;

  @Output() select = new EventEmitter<User>();

  imagePath = computed(() => `assets/users/${this.user.avatar}`);

  onSelectUser() {
    this.select.emit(this.user);
  }
}
