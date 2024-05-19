import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseModule } from './course/course.module';
import { ContactModule } from './contact/contact.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseModule, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  title = 'DGCourses'

}
