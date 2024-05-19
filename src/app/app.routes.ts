import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: 'courses', component: CourseComponent},
    {path: 'contact', component: ContactComponent}
];
