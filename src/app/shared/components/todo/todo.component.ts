import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoItem !:string;
  public toDoArray:Array<string> =[];

  public todoEdit!:string;

  constructor() { }

  

  ngOnInit(): void {
   let data= localStorage.getItem('todoItem')
    if(data != null){
      this.toDoArray=JSON.parse(data)
    }
  }

  ontodoAdd():void{
    console.log(this.todoItem);
    
    this.toDoArray.push(this.todoItem)
    this.todoItem=''
    localStorage.setItem('todoItem',JSON.stringify(this.toDoArray))
  }

  onEdit(eve:string){
  console.log('clicked')
    this.todoItem=eve
  }
  
  onDelete(del:string){
    console.log('deleted')
    this.toDoArray.splice(this.toDoArray.length-1,1)
  }

} 
