import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseItem } from '../../../shared/models/courseItem';

@Component({
  selector: 'add-course-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-course-form.component.html',
  styleUrl: './add-course-form.component.css'
})
export class AddCourseFormComponent {
  @Output() addCourse = new EventEmitter<CourseItem>();

  newCourseText = '';

  addNewCourse() {
    //this.items.push();
    this.addCourse.emit(new CourseItem(this.newCourseText));
    this.newCourseText = '';
  }

}
