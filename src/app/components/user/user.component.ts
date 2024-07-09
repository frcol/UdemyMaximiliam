import { Component, inject, Input, TemplateRef } from '@angular/core';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-userTest',
	standalone: true,
	imports: [NgbDatepickerModule],
	templateUrl: './user.component.html',
})

export class UserTestComponent {
  @Input() user!: any;
}
