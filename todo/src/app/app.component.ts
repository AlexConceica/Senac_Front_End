import { Component } from '@angular/core';
import { Tarefa } from 'src/models/tarefa';
import { TarefasLista } from 'src/models/tarefas.listas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showComplete: boolean = false;
  private list = new TarefasLista("Senac", [
  new Tarefa("Estudar HTML"),
  new Tarefa("Estudar CSS"),
  new Tarefa("Estudar JAVASCRIPT"),
  ]);
  get username(): string {
    return this.list.usuario;  
  }
  get itemCount(): number {
    return this.list.tarefas.filter(item => !item.completo).length;
  }
  get items(): readonly Tarefa[] {
    return this.list.tarefas.filter(item => this.showComplete || !item.completo);  
  }
  addTarefa(newItem: string) {
    if (newItem != "") {
      this.list.addTarefa(newItem);
    }
}
}
