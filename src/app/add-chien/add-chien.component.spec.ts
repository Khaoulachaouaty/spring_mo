import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChienComponent } from './add-chien.component';

describe('AddChienComponent', () => {
  let component: AddChienComponent;
  let fixture: ComponentFixture<AddChienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChienComponent]
    });
    fixture = TestBed.createComponent(AddChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
