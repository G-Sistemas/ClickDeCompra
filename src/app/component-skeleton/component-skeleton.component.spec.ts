import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSkeletonComponent } from './component-skeleton.component';

describe('ComponentSkeletonComponent', () => {
  let component: ComponentSkeletonComponent;
  let fixture: ComponentFixture<ComponentSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
