import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCloseUpComponent } from './my-close-up.component';

describe('MyCloseUpComponent', () => {
  let component: MyCloseUpComponent;
  let fixture: ComponentFixture<MyCloseUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCloseUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCloseUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
