import { Component, computed, EventEmitter, Input, Output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selectedId!: string;

  @Output() select = new EventEmitter<User>();

  //imagePath = computed(() => `assets/users/${this.user.avatar}`);
  get imagePath():string {
    return `assets/users/${this.user.avatar}`
  }

  onSelectUser() {
    this.select.emit(this.user);
  }
}
