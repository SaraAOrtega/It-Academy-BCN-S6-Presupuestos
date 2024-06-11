import { ModalLanguagesComponent } from './../modals/modallanguages/modallanguages.component';
import { ModalpagesComponent } from './../modals/modalpages/modalpages.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatDialogModule]
})
export class CounterPanelComponent {
  counterForm: FormGroup;

  constructor(public fb: FormBuilder, public dialog: MatDialog) {
    this.counterForm = this.fb.group({
      counterPages: [0, [Validators.min(0), Validators.max(10)]],
      counterLanguages: [0, [Validators.min(0), Validators.max(10)]],
    });

  }

  incrementPages() {
    const currentValue = this.counterForm.get('counterPages')?.value || 0;
    if (currentValue < 10) {  
      this.counterForm.get('counterPages')?.setValue(currentValue + 1);
    }
  }

  decrementPages() {
    const currentValue = this.counterForm.get('counterPages')?.value || 0;
    if (currentValue > 0) {
      this.counterForm.get('counterPages')?.setValue(currentValue - 1);
    }
  }

  incrementLanguages() {
    const currentValue = this.counterForm.get('counterLanguages')?.value || 0;
    if (currentValue < 10) {  // Check the maximum value
      this.counterForm.get('counterLanguages')?.setValue(currentValue + 1);
    }
  }

  decrementLanguages() {
    const currentValue = this.counterForm.get('counterLanguages')?.value || 0;
    if (currentValue > 0) {
      this.counterForm.get('counterLanguages')?.setValue(currentValue - 1);
    }
  }

  openModalPages (){
    const dialogRef = this.dialog.open(ModalpagesComponent , {
      width: '400px', 
      height: '300px' 
    });

    dialogRef.afterClosed().subscribe
  }

  openModalLanguages (){
    const dialogRef = this.dialog.open(ModalLanguagesComponent , {
      width: '400px', 
      height: '300px' 
    });

    dialogRef.afterClosed().subscribe
  }
}   