import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { AlertController, MenuController } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Todo[];
  monthLabels = [];
  dayLabels = [];
  flagList = false;
  todoId = null;
  editar = null;
  idRegister = null;

  todo: Todo = {
    paciente: null,
    procedimento: null,
    especialista: null,
    horario: null,
    date: null,
    createdAt: new Date().getTime(),
  }
  horario = null;

  constructor(
    private router: Router, 
    private todoService: TodoService, 
    private route: ActivatedRoute, 
    public alertController: AlertController, 
    private menu: MenuController) {}

  ngOnInit() {
    
    this.monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ag0', 'Set', 'Out', 'Nov', 'Dez']
    this.dayLabels = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    this.todoService.getTodos().subscribe(res => {
      this.todos = res;

      if(this.todos.length == 0){
        this.flagList = true;
      }else{
        this.flagList = false;
      }

    });
    this.editar = false;
    // this.todoId = this.route.snapshot.params['id'];

    // if (this.todoId) {
    //   this.loadTodo();
    // }
  }

  dateSelected(event) {
    this.todo.date = event.toLocaleDateString();
  }

  back() {
    this.editar = false;
    this.router.navigate(['/home'])
  }

  loadTodo() {
    this.todoService.getTodo(this.todoId).subscribe(res => {
      this.todo = res;
    });
  }

  async presentAlertConfirmDelete(item) {
    const alert = await this.alertController.create({
      header: 'Excluir Registro',
      message: 'Tem certeza que deseja excluir este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return false
          }
        }, {
          text: 'Excluir',
          handler: () => {
            this.todoService.removeTodo(item.id);
          }
        }
      ]
    });

    await alert.present();
  }

  
  editarTodo(register){
    this.idRegister = register;
    this.todoService.getTodo(register).subscribe(res => {
      this.todo = res;
      this.editar = true;
    });
    this.editar = false;
  }

  async saveTodo() {
    if (this.idRegister) {
      await this.todoService.updateTodo(this.todo, this.idRegister).then(() => {
      });
      this.back();
    }
    else {
      this.todo.horario = this.horario.split('T')[1].split('.')[0].split(':').join(' ').split(' ', 2).join().replace(',', ':');
      await this.todoService.addTodo(this.todo).then(() => {
      });
    }
  }

}
