import { Component, EventEmitter, Output, Input } from '@angular/core';
import { DUMMY_USER } from '../../DUMMY_USERS';

import { SubmitUser, type User } from './user.model';
import { AddUserComponent } from './add-user/add-user.component';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AddUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) users!: User[];
  @Output() cancel = new EventEmitter<void>();
  @Output() user = new EventEmitter<string>();
  openAddUser: boolean = false;
  changeUser(user: User) {
    this.user.emit(user.id);
  }
  onClose() {
    this.cancel.emit();
  }
  onClickAddUser() {
    this.openAddUser = true;
  }
  // Add User component
  onAddUser(user: SubmitUser) {
    console.log('Username: ', user.name);
    console.log('Avatar; ', user.avatar);
    this.users.push({
      id: 'u' + (this.users.length+1),
      name: user.name,
      avatar: user.avatar,
      exercises: [
        {
          exerciseId: "e1",
          category: "Cardio",
          exerciseName: "Chin-ups",
          reps: "10-12",
        },
      ],
    });
  }
  onCancel() {
    this.openAddUser = false;
  }
}
