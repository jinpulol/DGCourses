import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../../../shared/models/courseItem';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'course-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list-item.component.html',
  styleUrl: './course-list-item.component.css'
})
export class CourseListItemComponent {
  @Input() course!: CourseItem;

  get cssClasses() {
    return { 'strikeout': this.course.isComplete }
  }

  constructor(private events: EventService) {  }

  removeCourse() {
    this.events.emit('removeCourse', this.course);
  }

  toggleCompleted() {
    this.course.isComplete = !this.course.isComplete;
  }

}
