import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
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
}
