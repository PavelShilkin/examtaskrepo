import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

export interface Task {
    id: number,
    title: string,
    completed: boolean
}

@Injectable({providedIn: 'root'})
export class TaskService{
    tasks: Task[] = []
    completedTasks: Task[] = []

    constructor(private http: HttpClient){ }

    getData(): Observable<Task[]> {
      return this.http.get<Task[]>('https://gelltorn.github.io/interviewTestFakeApi/task.json')
          .pipe(tap(tasks => this.tasks = tasks.filter( t => t.completed == false)))
          .pipe(tap(tasks => this.completedTasks = tasks.filter( t => t.completed == true)))
    }

    removeTask(id: number) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }

    addTask(task: Task){
      this.tasks.push(task)
    }

    completeTask(id: number){
      let completedTask = this.tasks.find(t => t.id == id)
      completedTask.completed = true
      this.completedTasks.push(completedTask)
      this.tasks = this.tasks.filter( t => t.completed == false)
    }

    getTitle(id: number){
      let title = this.tasks.find( t => t.id == id).title;
      return title;
    }

    editTask(id: number, title: string){
      this.tasks.find(t => t.id == id).title = title
    }
}
