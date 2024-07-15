import { Component, Input } from '@angular/core';
import { Task } from '../task.model'
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true}) task!: Task;
  newTask?: Task;

  constructor(private taskService: TaskService) {}

  complete() {
    this.newTask = {...this.task};

    this.taskService.completeTask(this.newTask).subscribe({
      next: () => {
        console.log("Tarefa completada com sucesso.")
        this.task.completed = true;
      },
      error: (error) => console.error("Erro ao completar a tarefa:", error),
      complete: () => console.log("Requisição PUT completa")
    });
  }

}
