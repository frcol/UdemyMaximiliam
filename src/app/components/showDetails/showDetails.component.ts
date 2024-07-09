import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-showDetails',
  standalone: true,
  imports: [],
  templateUrl: './showDetails.component.html',
  styleUrl: './showDetails.component.css'
})
export class ShowDetails {
  @Input() user: any;

  @Output() select = new EventEmitter();

  sendToParent() {
    this.select.emit(this.user);
  }
}
