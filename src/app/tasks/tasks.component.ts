import { Component, inject, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskService } from './tasks.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, FormsModule, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) user!: User;
  tasks: Task[] = [];
  showForm: boolean = false;
  taskService = inject(TaskService);

  get userTasks() {
    return this.tasks.filter(task => task.userid === this.user.id && !task.completed);
  }

  constructor() {}

  ngOnInit():void {
    this.loadTasks();
  }

  loadTasks():void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  // ========================================
  onShowForm() {
    this.showForm = true;
  }

  closeTask() {
    this.showForm = false;
  }

  createTask(task: Task) {
    //this.tasks.push(task);
    this.loadTasks();
    this.showForm = false;
  }
}
