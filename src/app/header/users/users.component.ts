import { Component, EventEmitter, Output, Input } from '@angular/core';
import { DUMMY_USER } from '../../DUMMY_USERS';

import { type User } from "./user.model"
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({required:true}) users!:any;
  @Output() cancel = new EventEmitter<void>();
  @Output() user = new EventEmitter<string>();
  changeUser(user:User) {
    this.user.emit(user.id);
  }
  onClose() {
    this.cancel.emit();
  }
}
