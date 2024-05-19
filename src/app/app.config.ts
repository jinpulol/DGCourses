import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CourseService } from './course.service';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { EventService } from '../shared/services/EventService';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    EventService,
    CourseService,
    provideHttpClient(),
  ]
};