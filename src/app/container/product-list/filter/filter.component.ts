import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  men: number = 0;

  @Input()
  women: number = 0;

  @Input()
  kids: number = 0;

  selectedFilter: string = 'all';
  
  @Output()
  selectedFilterChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterChanged() {
    this.selectedFilterChange.emit(this.selectedFilter)
  }
}
