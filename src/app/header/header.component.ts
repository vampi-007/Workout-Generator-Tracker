import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { DUMMY_USER } from '../DUMMY_USERS';
import { Exercise, SubmitExercise, User } from './users/user.model';
import { AddCategoryComponent } from './add-category/add-category.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UsersComponent, AddCategoryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  @Input() users: User[] = [];
  openDialogue: boolean = false;
  openCategory: boolean = false;
  selectedUserId?: string;
  currentUser: User | undefined;
  @Output() user = new EventEmitter<string>();
  @Output() category = new EventEmitter<string>();
  selectedCategory: string | undefined;

  changeUser(user: User) {
    console.log('Change User: ', user.name);
    this.user.emit(user.id);
  }
  get categories() {
    const categories: string[] | undefined = [];
    this.currentUser?.exercises.forEach((exercise) => {
      categories.push(exercise.category);
    });
    return new Set(categories);
  }
  get selectedUser() {
    this.currentUser = this.users.find(
      (user: User) => user.id === this.selectedUserId
    );
    if (this.currentUser === undefined) this.currentUser = this.users[0];
    return this.currentUser;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.changeUser(this.selectedUser);
    this.changeCategory(this.currentUser?.exercises[0].category);
    this.onCloseDialogue();
  }
  onClick() {
    this.openDialogue = true;
  }
  onCloseDialogue() {
    this.openDialogue = false;
  }

  changeCategory(category: string | undefined) {
    this.selectedCategory = category;
    this.category.emit(category);
  }
  // Add Category Compnent
  onSelectAddCategory() {
    this.openCategory = true;
  }
  onCloseCategory() {
    this.openCategory = false;
  }
  onAddCategory(exercise:SubmitExercise) {
    const temp = {
      exerciseId: "e" + (this.selectedUser.exercises.length+1),
      exerciseName:exercise.exerciseName,
      category: exercise.category,
      reps:exercise.reps
    }
    this.selectedUser.exercises.push(temp)
    console.log(exercise)
    console.log(temp)
    this.onCloseCategory()
  }
}
