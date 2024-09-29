import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.css'
})
export class AddExerciseComponent {
  
  @Output() cancel = new EventEmitter();
  @Output() addCategory = new EventEmitter();
  categoryName ='';
  exerciseName ='';
  reps ='';
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.addCategory.emit({
      category: this.categoryName,
      exerciseName: this.exerciseName,
      reps: this.reps
    });
  }

}
