import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFormComponentComponent } from './toggle-form-component.component';

describe('ToggleFormComponentComponent', () => {
  let component: ToggleFormComponentComponent;
  let fixture: ComponentFixture<ToggleFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
