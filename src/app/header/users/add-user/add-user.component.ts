import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubmitUser } from '../user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
@Output() cancel = new EventEmitter();
@Output() submit = new EventEmitter<SubmitUser>();
onCancel() {
  this.cancel.emit()
}
  userName = '';
  avatar = '';

onSubmit() {
  this.submit.emit({
    name: this.userName,
    avatar:this.avatar
  })
  this.onCancel()
}

}
