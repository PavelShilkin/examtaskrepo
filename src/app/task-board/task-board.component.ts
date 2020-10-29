import { Component } from '@angular/core';
import { TaskService } from '../services/task-service'
@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})

export class TaskBoardComponent{
  constructor(public taskService: TaskService) { }

  removeTask(id: number){
    this.taskService.removeTask(id)
  }
}
