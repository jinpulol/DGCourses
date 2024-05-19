import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseItem } from '../../../shared/models/courseItem';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';

@Component({
  selector: 'course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseListItemComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  @Input() courses: CourseItem[] = [];

}
