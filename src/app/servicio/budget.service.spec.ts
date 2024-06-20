import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update precioTotal$ correctly', () => {
    const additionalPages = 2; 
    const additionalLanguages = 3; 
  
    //  método actualizarPrecio
    service.actualizarPrecio(additionalPages, additionalLanguages);
  
    // Comprobación 
    service.precioTotal$.subscribe(total => {
      const expectedCost = (additionalPages - 1 + additionalLanguages - 1) * 30;
      expect(total).toEqual(expectedCost);
    });
  }); 
});