import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private precioTotalSource = new BehaviorSubject<number>(0);
  precioTotal$ = this.precioTotalSource.asObservable();

  constructor() { }

  actualizarPrecio(additionalPages: number, additionalLanguages: number): void {
    const additionalCost = (additionalPages -1 + additionalLanguages -1 ) * 30;
    this.precioTotalSource.next(additionalCost);
  }
}