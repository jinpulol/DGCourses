import { Component } from '@angular/core';
import { CourseItem } from '../../shared/models/courseItem';
import { EventService } from '../../shared/services/EventService';
import { CourseService } from '../course.service';
import { AddCourseFormComponent } from "./add-course-form/add-course-form.component";
import { CourseFilterComponent } from "./course-filter/course-filter.component";
import { CourseListComponent } from "./course-list/course-list.component";

@Component({
    selector: 'app-course',
    standalone: true,
    templateUrl: './course.component.html',
    styleUrl: './course.component.css',
    imports: [AddCourseFormComponent, CourseFilterComponent, CourseListComponent]
})
export class CourseComponent {
  items: CourseItem[] = [];

  constructor(events: EventService, private courseService: CourseService) {
    events.listen('removeCourse', (course: any) => {
      let index = this.items.indexOf(course);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any) => {
      this.items = data;
    },
      (error: any) => {
        alert(error.message);
      }

    );
  }

  filter: any;

}
