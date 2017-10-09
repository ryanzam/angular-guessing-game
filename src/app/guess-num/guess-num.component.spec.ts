import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessNumComponent } from './guess-num.component';

describe('GuessNumComponent', () => {
  let component: GuessNumComponent;
  let fixture: ComponentFixture<GuessNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
