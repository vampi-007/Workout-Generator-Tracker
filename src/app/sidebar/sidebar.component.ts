import { Component, Input } from '@angular/core';
import { Exercise, User } from '../header/users/user.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input({required:true})exercises!:Exercise[];
  @Input({required:true}) currentUser!:User;
  constructor(){
    // console.log(this.exercises)
    // console.log(this.currentUser)
  }
}
