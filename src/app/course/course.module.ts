import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseComponent } from './course.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseListComponent,
    AddCourseFormComponent,
    CourseFilterComponent,
    CourseListItemComponent,
    CourseComponent
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
