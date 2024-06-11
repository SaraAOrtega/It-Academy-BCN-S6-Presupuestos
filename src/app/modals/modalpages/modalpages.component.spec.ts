import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpagesComponent } from './modalpages.component';

describe('ModalpagesComponent', () => {
  let component: ModalpagesComponent;
  let fixture: ComponentFixture<ModalpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalpagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
