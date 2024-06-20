import { BudgetService } from './../servicio/budget.service';
import { ModalLanguagesComponent } from './../modals/modallanguages/modallanguages.component';
import { ModalpagesComponent } from './../modals/modalpages/modalpages.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatDialogModule, ]
})
export class CounterPanelComponent {
  counterForm: FormGroup;

  constructor(public fb: FormBuilder, public dialog: MatDialog, public budgetService: BudgetService) {
    this.counterForm = this.fb.group({
      counterPages: [1, Validators.min(1)], 
      counterLanguages: [1, Validators.min(1)], 
    });

    ///  actualizar precio al iniciar
    this.counterForm.valueChanges.subscribe(() => this.actualizarPrecio());
    this.actualizarPrecio();
  }

  incrementPages() {
    const currentValue = this.counterForm.get('counterPages')?.value || 1;
    
      this.counterForm.get('counterPages')?.setValue(currentValue + 1);
      this.actualizarPrecio();
    
  }

  decrementPages() {
    const currentValue = this.counterForm.get('counterPages')?.value || 1;
    if (currentValue > 1) {
      this.counterForm.get('counterPages')?.setValue(currentValue - 1);
      this.actualizarPrecio();
    }
  }

  incrementLanguages() {
    const currentValue = this.counterForm.get('counterLanguages')?.value || 1;
    
      this.counterForm.get('counterLanguages')?.setValue(currentValue + 1);
      this.actualizarPrecio();
    
  }

  decrementLanguages() {
    const currentValue = this.counterForm.get('counterLanguages')?.value || 1;
    if (currentValue > 1) {
      this.counterForm.get('counterLanguages')?.setValue(currentValue - 1);
      this.actualizarPrecio();
    }
  }

  actualizarPrecio() {
    const totalPaginas = this.counterForm.get('counterPages')?.value || 1;
    const totalLenguajes = this.counterForm.get('counterLanguages')?.value || 1;
    this.budgetService.actualizarPrecio(totalPaginas, totalLenguajes);
  }

  resetCounters() {
    this.counterForm.get('counterPages')?.setValue(1);
    this.counterForm.get('counterLanguages')?.setValue(1);
    this.actualizarPrecio();
  }


  openModalPages() {
    const dialogRef = this.dialog.open(ModalpagesComponent, {
      width: '400px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe();
  }

  openModalLanguages() {
    const dialogRef = this.dialog.open(ModalLanguagesComponent, {
      width: '400px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe();
  }
}