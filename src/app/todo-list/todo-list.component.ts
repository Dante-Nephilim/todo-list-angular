import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todosArray: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: 'Pending',
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: 'Finished',
    },
    {
      id: 3,
      title: 'Learn NodeJS',
      completed: 'Pending',
    },
  ];
  newTodo: Todo = {
    id: 0,
    title: '',
    completed: 'Pending',
  };
  selectedTodo?: Todo;
  constructor() {}

  ngOnInit(): void {}
  addTodo(todo: Todo): void {
    let id = this.todosArray.length + 1;
    todo.id = id;
    this.todosArray.push(todo);
  }
  deleteTodo(id: number): void {
    let bufferTodo = this.todosArray.filter((todo) => todo.id !== id);
    this.todosArray = bufferTodo;
  }
  editTodo(id: number, todo: Todo): void {}
  changeStatus(id: number): void {
    console.log(id);
    console.log(this.todosArray[id - 1]);
    if (this.todosArray[id - 1].completed === 'Finished') {
      this.todosArray[id - 1].completed = 'Pending';
    } else {
      this.todosArray[id - 1].completed = 'Finished';
    }
  }
  changeEditStatus(id: number): void {
    this.selectedTodo = this.todosArray[id - 1];
  }
  hideEditStatus(): void {
    this.selectedTodo = undefined;
  }
}
