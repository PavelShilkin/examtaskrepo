import { Component, OnInit } from '@angular/core';
import {Task, TaskService} from '../services/task-service';

@Component({
  selector: 'app-task-action',
  templateUrl: './task-action.component.html',
  styleUrls: ['./task-action.component.scss']
})
export class TaskActionComponent implements OnInit {
  title: string = ''

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(){
    const task: Task = {
      id: 0,
      title: this.title,
      completed: false
    };
    this.taskService.addTask(task);
    this.title = ''
  }
}
