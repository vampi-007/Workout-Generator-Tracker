import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise, SubmitExercise, User } from '../header/users/user.model';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { AddCategoryComponent } from '../header/add-category/add-category.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AddExerciseComponent, AddCategoryComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input({ required: true }) exercises!: Exercise[] | undefined;
  @Input({ required: true }) currentUser!: User;
  @Output() exercise = new EventEmitter<string>();
  openAddExercise: boolean = false;
  onChangeExercise(exerciseId: string | undefined) {
    this.exercise.emit(exerciseId);
  }
  onOpenAddExercise() {
    this.openAddExercise = true;
  }
  onAddExercise(exercise: SubmitExercise) {
    const temp = {
      exerciseId: "e" + (this.currentUser.exercises.length+1),
      exerciseName:exercise.exerciseName,
      category: exercise.category,
      reps:exercise.reps
    }
    this.currentUser.exercises.push(temp)
    console.log(exercise)
    console.log(temp)
    this.onCloseExercise()
  }
  onCloseExercise() {
    this.openAddExercise = false;
  }
}
