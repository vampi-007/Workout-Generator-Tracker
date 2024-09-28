import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USER } from './DUMMY_USERS';
import { type User } from './header/users/user.model';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PanelComponent } from "./panel/panel.component";
import { Exercise } from './header/users/user.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workout Generator & Tracker';
  users : User[] = DUMMY_USER;
  selectedUserId?: string ;
  currentUser:User|undefined;
  exercises:Exercise[]|undefined;
  exercise:Exercise|undefined;
  get selectedExercises(){
    return this.exercises;
  } 
  get selectedUser() {
    this.currentUser = this.users.find((user:User) => user.id === this.selectedUserId)
    if(this.currentUser ===undefined)
      this.currentUser = this.users[0]
    return this.currentUser;
  }
  
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log("this.selectedUserId",id);

    console.log(this.selectedUserId);
  }
  onSelectCategory(category: string){
    this.exercises = this.selectedUser.exercises.filter((exercise:Exercise) => exercise.category === category)
  }
  onSelectExercise(exerciseId :string|undefined){
    this.exercise = this.selectedUser.exercises.filter((exercise:Exercise) => exercise.exerciseId === exerciseId)[0]
    const any = this.selectedUser.exercises.filter((exercise:Exercise) => exercise.exerciseId === exerciseId);
    console.log("Selected Exercise: ", any)
  }
}
