import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private precioPor = 30;
  private precioTotalSubject = new BehaviorSubject<number>(0);

  precioTotal$ = this.precioTotalSubject.asObservable();

  constructor() { }

  calcularPrecio(paginas: number, lenguajes: number): number {
    return (paginas + lenguajes) * this.precioPor;
  }

  actualizarPrecio(paginas: number, lenguajes: number): void {
    const precioTotal = this.calcularPrecio(paginas, lenguajes);
    this.precioTotalSubject.next(precioTotal);
  }
}