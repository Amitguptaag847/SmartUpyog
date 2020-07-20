import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryinputComponent } from './primaryinput.component';

describe('PrimaryinputComponent', () => {
  let component: PrimaryinputComponent;
  let fixture: ComponentFixture<PrimaryinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
