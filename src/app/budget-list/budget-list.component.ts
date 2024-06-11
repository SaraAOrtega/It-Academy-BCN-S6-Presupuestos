
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CounterPanelComponent } from './../panel/panel.component';


@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule, MatExpansionModule, MatIconModule, CounterPanelComponent],
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  servicios: FormGroup;
  total: number = 0;


  constructor(public fb: FormBuilder) {
    this.servicios = this.fb.group({
      seo: false,
      ads: false,
      web: false
    });
  }

  ngOnInit(): void {
    this.servicios.valueChanges.subscribe(values => {
      this.calculateTotal(values);
    });
  }

  calculateTotal(values: any): void {
    this.total = 0;
    if (values.seo) {
      this.total += 300;
    }
    if (values.ads) {
      this.total += 400;
    }
    if (values.web) {
      (this.total += 500);
    }
  }
  
}