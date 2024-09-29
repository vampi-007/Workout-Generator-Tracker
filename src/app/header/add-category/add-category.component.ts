import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
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
