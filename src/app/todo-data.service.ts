import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  lastId = 0;

  todos: Todo[] = [];

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(
      todo => todo.id !== id
    );
    return this;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter(
      todo => todo.id === id
    ).pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
