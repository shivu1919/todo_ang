import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  task_text:string=''
  tasks:string[] = []
  completed:string[]=[]

  addText(event:any){
      this.task_text=event.target.value
  }

  addTask(){

    if(this.task_text==''){
      alert('Please enter a task')
    }
    else{
      this.tasks.push(this.task_text)
      let v:any = document.getElementById('inp')
      v.value=''
      this.task_text=''
    }

  
  }

  deleteTask(index:any){
    const audio = new Audio('assets/delete.mp3')
    audio.play();
    this.tasks.splice(index,1)
  }


  taskCompleted(index:any){

    const audio = new Audio('assets/delete.mp3')
    audio.play();

    setTimeout(()=>{
      this.completed.push(this.tasks[index])  
      this.tasks.splice(index,1);
    },500)
  }

}
