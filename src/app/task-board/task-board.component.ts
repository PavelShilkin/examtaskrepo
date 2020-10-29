import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task-service'

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})

export class TaskBoardComponent implements OnInit{

  constructor(private taskService: TaskService) { }

  ngOnInit(){
    this.taskService.getData().subscribe(() => {
    })
  }
}
