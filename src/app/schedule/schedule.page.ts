import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {


  monthLabels = [];
  dayLabels = [];
  todoId = null;
  horario = null;

  todo: Todo = {
    paciente: null,
    procedimento: null,
    especialista: null,
    horario: '',
    date: null,
    createdAt: new Date().getTime(),
  }
  

  constructor(
    private todoService: TodoService, 
    private route: ActivatedRoute, 
    private loadingController: LoadingController,
    private menu: MenuController,
    private router: Router) { }

  ngOnInit() {
    this.monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ag0', 'Set', 'Out', 'Nov', 'Dez'];
    this.dayLabels = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    this.todoId = this.route.snapshot.params['id'];

    if (this.todoId) {
      this.loadTodo();
    }

  }

  dateSelected(event) {
    this.todo.date = event.toLocaleDateString();
  }

  loadTodo() {
    this.todoService.getTodo(this.todoId).subscribe(res => {
      this.todo = res;
    });
  }

  async saveTodo() {
    if (this.todoId) {
      this.todo.horario = this.horario.split('T')[1].split('.')[0].split(':').join(' ').split(' ', 2).join().replace(',', ':');
      await this.todoService.updateTodo(this.todo, this.todoId).then(() => {
      });
    }
    else {
      this.todo.horario = this.horario.split('T')[1].split('.')[0].split(':').join(' ').split(' ', 2).join().replace(',', ':');
      await this.todoService.addTodo(this.todo).then(() => {
      });
    }
  }
    
}
