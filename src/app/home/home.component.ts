import { Component } from '@angular/core';
import { BudgetListComponent } from '../budget-list/budget-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BudgetListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
