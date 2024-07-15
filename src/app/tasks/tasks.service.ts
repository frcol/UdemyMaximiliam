import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Task } from "./task.model";
import { EMPTY, Observable, catchError, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  URL: string = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL + 'tasks');
  }

  getTaskById(id: number) {
    return this.http.get<void>(this.URL + 'tasks/' + id);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.URL + 'tasks', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.URL + 'tasks/' + task.id, task);
  }

  deleteTask(task: Task): Observable<void> {
    return this.http.delete<void>(this.URL + 'tasks/' + task.id);
  }

  completeTask(task: Task): Observable<void> {
    task.completed = true;

    return this.http.put<void>(this.URL + 'tasks/' + task.id, task).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Error completing task:", error);
        return EMPTY; // Retorna um Observable vazio para continuar o fluxo
      })
    );
  }


  uncompleteTask(task: Task): Observable<void> {
    task.completed = false;
    return this.http.put<void>(this.URL + 'tasks/' + task.id, task);
  }
}
