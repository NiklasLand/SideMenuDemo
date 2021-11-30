import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMiniComponent } from './news-mini.component';

describe('NewsMiniComponent', () => {
  let component: NewsMiniComponent;
  let fixture: ComponentFixture<NewsMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
