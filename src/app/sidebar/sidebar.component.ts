import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise, User } from '../header/users/user.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input({required:true})exercises!:Exercise[]|undefined;
  @Input({required:true}) currentUser!:User;
  @Output() exercise = new EventEmitter<string>();

  onChangeExercise(exerciseId : string| undefined){
    this.exercise.emit(exerciseId)
  }
  
}
