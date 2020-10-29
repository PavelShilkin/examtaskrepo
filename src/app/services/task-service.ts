import { Injectable } from "@angular/core";

export interface Task {
    id: number,
    text: string,
    completed: boolean,
    date: any
}

@Injectable({providedIn: 'root'})
export class TaskService{
    public tasks: Task[] = [
        { id: 1, text: 'Сходить за молоком', completed: false, date: new Date() },
        { id: 2, text: 'Вынести мусор', completed: false, date: new Date() },
        { id: 3, text: 'Выгулять собаку', completed: false, date: new Date() }
    ]
    
    removeTask(id: number) {
        this.tasks = this.tasks.filter(t => t.id !== id)
    }
}