import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseItem } from '../../../shared/models/courseItem';

const filters = [
  (item: CourseItem) => item,
  (item: CourseItem) => item.isComplete,
  (item: CourseItem) => !item.isComplete
];

@Component({
  selector: 'course-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-filter.component.html',
  styleUrl: './course-filter.component.css'
})

export class CourseFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.updateFilter('2');
  }

  listFilter: any = '2';

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }

}
