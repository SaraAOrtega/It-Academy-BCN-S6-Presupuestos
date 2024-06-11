import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModallanguagesComponent } from './modallanguages.component';

describe('ModallanguagesComponent', () => {
  let component: ModallanguagesComponent;
  let fixture: ComponentFixture<ModallanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModallanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModallanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
