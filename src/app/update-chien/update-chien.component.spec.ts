import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChienComponent } from './update-chien.component';

describe('UpdateChienComponent', () => {
  let component: UpdateChienComponent;
  let fixture: ComponentFixture<UpdateChienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChienComponent]
    });
    fixture = TestBed.createComponent(UpdateChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
