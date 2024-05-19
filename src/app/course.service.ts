import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { CourseItem } from '../shared/models/courseItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application.json',

      })
    };
  }

  getCourses() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    return this.http.get('assets/courses.json', options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      console.error('There is an issue with the client or network: ', error.error);
    } else {
      console.error('Server-side error: ', error.error);
    }

    return throwError(() => new Error('Cannot retrieve courses from the server. Please try again.'))
  }

  private addCourse(course: CourseItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/courses.json', course, options);
  }
}
