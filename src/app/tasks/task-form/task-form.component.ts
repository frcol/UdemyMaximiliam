import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { User } from '../../user/user.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

export class TaskFormComponent {
  @Input({required:true}) user!: User;
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<Task>();

  task: Task = { id: '', userid: '', title: '', dueDate: new Date(), summary: '', completed: false };

  constructor(private taskService: TaskService) {}

  cancelTask() {
    this.close.emit();
  }

  onSubmit() {
      this.task.id = new Date().getUTCMilliseconds().toString();
      this.task.userid = this.user.id;
      this.taskService.createTask(this.task).subscribe(task => {
        this.create.emit(task);
    });
  }
}
