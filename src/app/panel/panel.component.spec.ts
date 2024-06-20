import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: CounterPanelComponent;
  let fixture: ComponentFixture<CounterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
