import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVaccimationComponent } from './edit-vaccination.component';

describe('EditVaccimationComponent', () => {
  let component: EditVaccimationComponent;
  let fixture: ComponentFixture<EditVaccimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVaccimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVaccimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
